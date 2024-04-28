## Installation

Install [poetry](https://python-poetry.org/docs/) then:

```
poetry shell
poetry install
```

Any following commands or interaction with the project should be executed in the venv created with `poetry shell`.

## Ollama server

For the api server to be able to access ollama, you need to run this on the same machine:
```
OLLAMA_ORIGINS=* OLLAMA_HOST=0.0.0.0:11434 ollama serve
```

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
