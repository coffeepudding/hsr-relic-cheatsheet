from sqlalchemy.orm import Session
from hashlib import md5 as hash_func
import models
import schemas.character as character

def get_characters(db: Session):
    """get user by email"""
    return db.query(models.Character).limit(5)

# def create_user_query(db: Session, user: schemas.UserCreate):
#     """create user by email and password"""
#     hashed_password = hash_func(user.password.encode()).hexdigest()
#     db_user = models.User(email=user.email, hashed_password=hashed_password)
#     db.add(db_user)
#     db.commit()
#     db.refresh(db_user)
#     return db_user
