# init_db.py
from sqlalchemy.orm import Session
from models import engine, Base, Item

Base.metadata.create_all(bind=engine)

def init_db():
    db = Session(bind=engine)
    db.add_all([
        Item(name="Item 1", description="Description for item 1"),
        Item(name="Item 2", description="Description for item 2"),
    ])
    db.commit()

if __name__ == "__main__":
    init_db()
