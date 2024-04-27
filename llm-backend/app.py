from dataclasses import dataclass
from fastapi import Depends, FastAPI
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


app = FastAPI()

app.include_router(models_router, prefix="/models", tags=["models"])
app.include_router(levels_router, prefix="/levels", tags=["levels"])


@app.post("/prompt")
async def prompt(prompt: Prompt, level_repository: LevelRepository = Depends()):
    level = level_repository.get(prompt.level)
    if level is None:
        return "Level not found"
    current_content = prompt.prompt
    count = 0
    for model in level.models:
        print(f"{count} -> {current_content}")
        current_content = ollama.generate(
            model.name, current_content)['response']
        count += 1
    print(f"{count} -> {current_content}")
    return current_content
