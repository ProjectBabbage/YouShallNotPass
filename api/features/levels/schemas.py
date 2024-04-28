from core.db import Base
from typing import List, Optional
from pydantic import BaseModel
from features.models.schemas import ModelBase
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship


class LevelCreate(BaseModel):
    name: str
    models: List[int]
    answer: str
    description: str


class LevelBase(BaseModel):
    id: int
    name: str
    models: List[ModelBase]
    answer: str
    description: Optional[str] = None

    class Config:
        from_attributes = True


class Level(Base):
    __tablename__ = "levels"
    id = Column(Integer, primary_key=True)
    name = Column(String)
    answer = Column(String)
    description = Column(String)
    models = relationship(
        "Model", secondary="m2m_level_model", order_by="M2MLevelModel.exec_order"
    )


class M2MLevelModel(Base):
    __tablename__ = "m2m_level_model"
    id = Column(Integer, primary_key=True)
    exec_order = Column(Integer)
    level_id = Column(Integer, ForeignKey("levels.id"))
    model_id = Column(Integer, ForeignKey("models.id"))
