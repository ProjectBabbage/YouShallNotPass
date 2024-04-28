from fastapi import Depends
from core.db import get_session
from core.repository import Repository
from features.models.schemas import Model
import ollama


class ModelRepository(Repository):
    def __init__(self, db=Depends(get_session)):
        super().__init__(db, Model)

    def create(self, model: Model):
        created = super().create(model)
        self.upsert_model(created)
        return created

    def update(self, id, obj_in):
        updated = super().update(id, obj_in)
        self.upsert_model(updated)
        return updated

    def upsert_model(self, model: Model):
        modelfile = self.make_modelfile(model.system_prompt)
        ollama.create(model=model.name, modelfile=modelfile)

    def make_modelfile(self, system_prompt):
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
