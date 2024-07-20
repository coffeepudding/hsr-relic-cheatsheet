from sqlalchemy import Boolean, Column, Integer, String
from database import Base

class Character(Base):
    __tablename__ = "characters"

    id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    name = Column(String, nullable=False)
    path = Column(String)
    type = Column(String)
