from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
import models
from schemas import character
from crud import (
    get_characters,
)
from database import SessionLocal, engine

# table作成
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Dependency
def get_db():
    try:
        db = SessionLocal() # sessionを生成
        yield db
    finally:
        db.close()

@app.get("/characters", response_model=list[character.Character])
def get_all_characters(db: Session = Depends(get_db)):
    return get_characters(db=db)


# @app.post("/users/", response_model=schemas.User)
# def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
#     db_user = get_user_by_email_query(db=db, email=user.email)
#     if db_user:
#         raise HTTPException(status_code=400, detail="Email already registered")
#     return db_user
