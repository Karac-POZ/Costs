# 🚀 Проект управления расходами

Этот проект представляет собой веб-приложение для управления расходами. Он состоит из:
- **Backend** (NestJS)
- **Frontend** (React(Vite))
- **Базы данных** (PostgreSQL)

Проект разворачивается с использованием **Docker Compose**.

---

## 📌 Установка и запуск

### 1️⃣ Клонирование репозитория
```sh
git clone <ссылка-на-репозиторий>
cd <название-папки>
```

### 2️⃣ Создание файла окружения
Создайте файл `.env` в корневой папке и добавьте в него:
```ini
POSTGRES_USER=your_username
POSTGRES_PASSWORD=your_password
POSTGRES_DB=your_database
DATABASE_URL=postgresql://your_username:your_password@db:5432/your_database
PORT=3000
```

### 3️⃣ Запуск контейнеров
```sh
docker-compose up --build
```
> Флаг `--build` нужен при первом запуске или изменении `Dockerfile`.

После успешного запуска:
- **Backend** будет доступен по `http://localhost:3000`
- **Frontend** будет доступен по `http://localhost:5173`
- **PostgreSQL** будет работать на `localhost:5432`

---
