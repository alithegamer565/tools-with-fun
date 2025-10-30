# Tools with Fun - Full Project (MongoDB)

This is a starter Next.js project for Tools with Fun.

## Setup
1. Create `.env.local` with:
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
2. npm install
3. npm run dev
4. Open http://localhost:3000

Admin flow:
- Create first admin: POST /api/auth/create-admin (or visit /admin/create)
- Login: /admin/login
- Dashboard: /admin/dashboard
