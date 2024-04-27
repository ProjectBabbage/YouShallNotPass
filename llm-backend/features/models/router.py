
from typing import List
from fastapi import APIRouter, Depends

from features.models.repository import ModelRepository
from features.models.schemas import CreateModel, ModelBase


router = APIRouter()


@router.get("/")
async def list_models(repository: ModelRepository = Depends()) -> List[ModelBase]:
    return repository.list()


@router.post("/")
async def create_model(
        form: CreateModel,
        repository: ModelRepository = Depends()) -> ModelBase:
    return repository.create(form)


@router.put("/{id}")
async def update_model(
        id: int,
        form: CreateModel,
        repository: ModelRepository = Depends()) -> ModelBase:
    return repository.update(id, form)
