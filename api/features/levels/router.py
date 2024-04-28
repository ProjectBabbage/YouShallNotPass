

from typing import List
from fastapi import APIRouter, Depends

from features.levels.repository import LevelRepository
from features.levels.schemas import LevelBase, LevelCreate


router = APIRouter()


@router.get("/")
async def list_levels(
    repository: LevelRepository = Depends()
) -> List[LevelBase]:
    return repository.list()


@router.post("/")
async def create_level(
        form: LevelCreate,
        repository: LevelRepository = Depends()) -> LevelBase:
    return repository.create(form)


@router.put("/{id}")
async def update_level(
        id: int,
        form: LevelCreate,
        repository: LevelRepository = Depends()) -> LevelBase:
    return repository.update(id, form)


@router.get("/{id}/answer/{answer}")
async def check_answer(
        id: int,
        answer: str,
        repository: LevelRepository = Depends()) -> bool:
    level = repository.get(id)
    return level.answer == answer
