## Installation

Install [poetry](https://python-poetry.org/docs/) then:

```
poetry shell
poetry install
```

Any following commands or interaction with the project should be executed in the venv created with `poetry shell`.

## Run with livereload:

Run the api with hot reloading:

```
uvicorn app:app --reload
```

## Run migration

When updating them models, run the following: (create the migration file, then apply it)

```
alembic revision --autogenerate -m "Description of the changes to models"
alembic upgrade head
```

### Having any issue with the migrations

Brutal way to solve this:

- remove all files in migrations/versions/
- remove llm.db
- then do the process above (creating the migration and applying it)
