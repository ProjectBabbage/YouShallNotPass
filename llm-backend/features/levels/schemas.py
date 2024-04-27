from core.db import Base
from typing import List
from pydantic import BaseModel
from features.models.schemas import ModelBase
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship


class LevelCreate(BaseModel):
    name: str
    models: List[int]
    answer: str


class LevelBase(BaseModel):
    id: int
    name: str
    models: List[ModelBase]
    answer: str

    class Config:
        orm_mode = True


class Level(Base):
    __tablename__ = "levels"
    id = Column(Integer, primary_key=True)
    name = Column(String)
    answer = Column(String)
    models = relationship("Model", secondary="m2m_level_model")


class M2MLevelModel(Base):
    __tablename__ = "m2m_level_model"
    id = Column(Integer, primary_key=True)
    order = Column(Integer)
    level_id = Column(Integer, ForeignKey('levels.id'))
    model_id = Column(Integer, ForeignKey('models.id'))
