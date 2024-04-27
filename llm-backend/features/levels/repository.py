
from typing import List
from fastapi import Depends
from core.db import get_session
from core.repository import Repository
from features.levels.schemas import Level, LevelCreate, M2MLevelModel
from features.models.repository import ModelRepository


class LevelRepository(Repository):
    def __init__(self, db=Depends(get_session)):
        super().__init__(db, Level)

    def create(self, level: LevelCreate):
        model_repository = ModelRepository(self.db)
        # remove duplicates from required, keeping them in order
        required_model_ids = list(dict.fromkeys(level.models))

        level.models = []
        created = super().create(level)
        for model_id in required_model_ids:
            model = model_repository.get(model_id)
            created.models.append(model)
        self.db.commit()

        self.enforce_models_order(created, required_model_ids)
        return created

    def update(self, id, level: LevelCreate):
        model_repository = ModelRepository(self.db)
        # remove duplicates from required, keeping them in order
        required_model_ids = list(dict.fromkeys(level.models))
        level.models = []
        updated = super().update(id, level)
        updated.models = []
        for model_id in required_model_ids:
            model = model_repository.get(model_id)
            updated.models.append(model)
        self.db.commit()

        self.enforce_models_order(updated, required_model_ids)
        return updated

    def enforce_models_order(self, level: Level, models: List[int]):
        for idx, model_id in enumerate(models):
            self.db.query(M2MLevelModel).filter(
                M2MLevelModel.level_id == level.id,
                M2MLevelModel.model_id == model_id,
            ).update({"exec_order": idx})
        self.db.commit()
        return level
