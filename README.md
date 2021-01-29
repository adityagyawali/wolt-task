# Wolt summer internship 2021 task

## Description

This repo consist of both frontend and backend task mentioned [here](https://github.com/woltapp/summer2021-internship). Here, in frontend instead of using `discovery_page.json`, I fetch data from backend using Helsinki coordinates i.e `lat=60.1709&lon=24.941` for displaying restaurants based on popularity, new and nearby.

## Running on your local machine

### Requirments

* node
* npm

#### 1. Clone the project

```bash
git clone  https://github.com/adityagyawali/wolt-task.git
```

#### 2. Install depencies

  1. Install project dependencies on backend

  ```bash
    npm i
  ```

  1. Install project dependencies on frontend

  ```bash
    npm run frontend:install
  ```

  1. Compile and launch both backend and frontend on local environment

  ```bash
    npm run build:ui
  ```

#### 4. Navigate to [http://localhost:8000](http://localhost:8000)

## Running tests

### Backend

```bash
  npm run test
```

### Frontend

  1. Change directory to frontend

  ```bash
  cd frontend
  ```

  1. Run tests

  ```bash
    npm run test
  ```

### Navigate to [https://wolt-fullstack.herokuapp.com/](https://wolt-fullstack.herokuapp.com/) to see live version deployed in heroku
