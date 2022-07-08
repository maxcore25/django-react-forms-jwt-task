# django-react-forms-jwt-task

## Navigation

- [django-react-forms-jwt-task](#django-react-forms-jwt-task)
  - [Navigation](#navigation)
  - [Description](#description)
  - [Tech Stack](#tech-stack)
  - [Functionality](#functionality)
  - [Build](#build)
    - [Development](#development)
  - [Documentation](#documentation)
    - [Test Accounts](#test-accounts)
  - [License](#license)

## Description

This project provides test form authorization using React.js, JWT, react-hook-form and Django 4.

## Tech Stack

- Frontend:
  [![React.js](https://img.shields.io/badge/React.js-black?logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Sass](https://img.shields.io/badge/Sass-hotpink?logo=sass&logoColor=white)](https://sass-lang.com/)
- Backend:
  [![Django](https://img.shields.io/badge/Django-%23092E20?logo=django&logoColor=white)](https://docs.djangoproject.com/en/4.0/)
  [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-%23316192?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
  [![JWT](https://img.shields.io/badge/JWT-black?logo=JSON%20web%20tokens&logoColor=white)](https://www.postgresql.org/)

## Functionality

- Admin
  - Authorization
  - Some extra functions
- User
  - Authorization

## Build

### Development

1. Clone this repository:

```sh
git clone https://github.com/maxcore25/django-react-forms-jwt-task
cd django-react-forms-jwt-task
```

2. Modify `.env.sample`:

```sh
SECRET_KEY=
DB_ENGINE=django.db.backends.postgresql
DB_NAME=
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_PORT=
```

3. Rename `.env.sample` to `.env`
4. Install Backend dependencies:

```sh
cd backend
pip install -r requirements.txt
```

5. Install Frontend dependencies:

```sh
cd frontend
npm install
```

6. Run Backend:

```sh
cd backend
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

7. Run Frontend:

```sh
cd frontend
npm start
```

## Documentation

Frontend runs here - [http://localhost:3000](http://localhost:3000 "Frontend URL")

Backend runs here - [http://localhost:8000](http://localhost:8000 "Backend URL")

'core' - Backend main folder.

### Test Accounts

- Admin
  - Login - `admin@test.com`
  - Password - `admin`

- User
  - Login - `user@test.com`
  - Password - `user`

## License

- [MIT](LICENSE)