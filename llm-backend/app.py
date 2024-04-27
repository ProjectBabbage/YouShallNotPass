from dataclasses import dataclass
from fastapi import FastAPI
import ollama


@dataclass
class Level:
    name: str
    answer: str


@dataclass
class Prompt:
    level: str
    prompt: str


@dataclass
class CreateLevel:
    level: str
    system: str


app = FastAPI()

models = ollama.list()['models']

answers = {
    "string:latest": "password!!",
    "level3:latest": "MARSUPILAMI"
}

levels = []
for model in models:
    if model["name"] in answers:
        levels.append(Level(name=model["name"], answer=answers[model["name"]]))


@app.post("/prompt")
async def prompt(prompt: Prompt):
    return ollama.generate(model=prompt.level, prompt=prompt.prompt)


@app.post("/level")
async def create_level(level: CreateLevel):
    modelfile = make_modelfile(level.system)
    ollama.create(model=level.level, modelfile=modelfile)
    return modelfile


@app.get("/levels")
async def get_levels():
    return list(answers.keys())


@app.get("/models")
async def get_models():
    return models


@app.get("/level/{level}/{answer}")
async def get_level(level: str, answer: str):
    if level in answers and answers[level] == answer:
        return True
    return False


def make_modelfile(system_prompt):
    modelfile = '''
FROM mistral:latest
TEMPLATE """[INST] {{ .System }} {{ .Prompt }} [/INST]"""
PARAMETER stop "[INST]"
PARAMETER stop "[/INST]"
SYSTEM """
'''
    modelfile += system_prompt
    modelfile += '''
"""'''
    return modelfile
