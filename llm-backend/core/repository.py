

class Repository:
    def __init__(self, db, model):
        self.db = db
        self.model = model

    def create(self, obj_in):
        db_obj = self.model(**obj_in.dict())
        self.db.add(db_obj)
        self.db.commit()
        self.db.refresh(db_obj)
        return db_obj

    def get(self, id):
        return self.db.query(self.model).filter(self.model.id == id).first()

    def list(self, *args, **kwargs):
        return self.db.query(self.model).filter(*args, **kwargs).all()

    def update(self, id, obj_in):
        db_obj = self.get(id)
        for key, value in obj_in.dict().items():
            setattr(db_obj, key, value)
        self.db.add(db_obj)
        self.db.commit()
        self.db.refresh(db_obj)
        return db_obj

    def delete(self, id):
        db_obj = self.get(id)
        self.db.delete(db_obj)
        self.db.commit()
        return db_obj
