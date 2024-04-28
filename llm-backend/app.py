from dataclasses import dataclass
from typing import Optional
from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
import ollama
from core.db import Base, engine
from features.levels.repository import LevelRepository
from features.models.router import router as models_router
from features.levels.router import router as levels_router

Base.metadata.create_all(bind=engine)


@dataclass
class Prompt:
    level: str
    prompt: str
    user_id: Optional[str] = None


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(models_router, prefix="/models", tags=["models"])
app.include_router(levels_router, prefix="/levels", tags=["levels"])

contexts = {}


@app.post("/prompt")
async def prompt(prompt: Prompt, level_repository: LevelRepository = Depends()):
    context = None
    # if prompt.user_id is not None and prompt.user_id in contexts:
    #    context = contexts[prompt.user_id]

    level = level_repository.get(prompt.level)
    if level is None:
        return "Level not found"
    current_content = prompt.prompt
    count = 0
    for model in level.models:
        print(f"{count} -> {current_content}")
        result = ollama.generate(model.name, current_content)
        current_content = result['response']
        # if prompt.user_id is not None:
        #    contexts[prompt.user_id] = result['context']
        count += 1
    print(f"{count} -> {current_content}")
    return current_content


async def stream_generator(stream):
    # print parts in a single line until the last one
    for chunk in stream:
        part = chunk['response']
        if part:
            print(part, end='')
        else:
            print()
        yield part


@app.post("/prompt-stream")
async def prompt_stream(
    prompt: Prompt,
    level_repository: LevelRepository = Depends()
) -> StreamingResponse:
    level = level_repository.get(prompt.level)
    if level is None:
        return "Level not found"
    current_content = prompt.prompt
    count = 0
    models_number = len(level.models)
    for model in level.models:
        is_last = count == models_number-1
        print(f"{count} -> {current_content}")
        current_content = ollama.generate(
            model.name, current_content, stream=is_last)
        if not is_last:
            current_content = current_content['response']
        else:
            return StreamingResponse(stream_generator(current_content))
        count += 1
