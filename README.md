LocalBite

Веб-приложение для заказа блюд и бронирования столиков.

Стек
- Frontend: React + Vite
- Backend: Node.js + Express
- Database: PostgreSQL
- ORM: Prisma

---

Запуск проекта

1. Клонирование

bash
git clone https://github.com/USERNAME/localbite.git
cd localbite

2. Бэкэнд

bash
cd backend
npm install

Создать .env 

.env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/localbite"
PORT=5000

Применить миграции
npx prisma migrate dev

Запуск сервера
npm run dev

Backend - http://localhost:5000

3. Фронтэнд

cd ../frontend
npm install
npm run dev

Frontend - http://localhost:5173
