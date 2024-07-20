from pydantic import BaseModel

class CharacterBase(BaseModel):
    name: str
    path: str
    type: str

class CharacterCreate(CharacterBase):
    pass

class Character(CharacterBase):
    id: int
