
from fastapi import Depends
from core.db import get_session
from core.repository import Repository
from features.levels.schemas import Level, LevelCreate
from features.models.repository import ModelRepository


class LevelRepository(Repository):
    def __init__(self, db=Depends(get_session)):
        super().__init__(db, Level)

    def create(self, level: LevelCreate):
        model_repository = ModelRepository(self.db)
        required_model_ids = level.models
        level.models = []
        created = super().create(level)
        for model_id in required_model_ids:
            model = model_repository.get(model_id)
            created.models.append(model)
        self.db.commit()
        return created

    def update(self, id, obj_in):
        model_repository = ModelRepository(self.db)
        required_model_ids = obj_in.models
        obj_in.models = []
        updated = super().update(id, obj_in)
        updated.models = []
        for model_id in required_model_ids:
            model = model_repository.get(model_id)
            updated.models.append(model)
        self.db.commit()
        return updated
