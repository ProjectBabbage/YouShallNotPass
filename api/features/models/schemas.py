from core.db import Base
from sqlalchemy import Column, Integer, String
from pydantic import BaseModel


class ModelBase(BaseModel):
    id: int
    name: str
    system_prompt: str
    post_check: str

    class Config:
        from_attributes = True


class CreateModel(BaseModel):
    name: str
    system_prompt: str


class Model(Base):
    __tablename__ = "models"
    id = Column(Integer, primary_key=True)
    name = Column(String, unique=True)
    system_prompt = Column(String)
    post_check = Column(String)