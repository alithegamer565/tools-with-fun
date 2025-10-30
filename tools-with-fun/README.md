# Tools with Fun - Starter Project

This is a starter full-stack Next.js project for **Tools with Fun** — a collection of web tools and mini-games.
It includes a simple Admin Panel that can add/edit tools (local file storage). For production (Vercel), use a database (MongoDB Atlas / Supabase) for persistent admin edits.

## Features
- Responsive layout with pages for Calculators, Text Tools, Generators, Games, and Admin.
- Admin API to add/edit tools (uses local `data/tools.json`).
- No authentication required for users (public tools).
- Admin actions require `ADMIN_SECRET` header for API routes (set in `.env.local`).
- Basic SEO meta tags and sitemap generation file included.

## Local setup
```bash
# Install
npm install

# Run dev
npm run dev
# Open http://localhost:3000
```

## Admin usage (local)
Create `.env.local` with:
```
ADMIN_SECRET=your-admin-secret
```

Admin API endpoint:
- `POST /api/admin/tool` to add tool (send JSON with `id`, `title`, `category`, `description`, `html`)

The admin page (`/admin`) provides a simple UI to add/edit tools (edits write to `data/tools.json` locally).
> Important: Writing to the filesystem works locally, but *won't persist* on Vercel serverless deployments. For persistence on Vercel, connect the app to MongoDB Atlas or Supabase. See "Production deployment" below.

## Production deployment (recommended)
1. Push this repository to GitHub.
2. Sign up at Vercel and import the GitHub repo.
3. Set environment variable `ADMIN_SECRET` in Vercel project settings.
4. For persistent admin edits, set up MongoDB Atlas and update the API routes to use the DB (instructions in README - replace file-based storage with DB).

## Notes
- This scaffold is intentionally simple and easy to extend.
- Admin panel is minimal; for a full non-technical admin experience, integrate a DB and authentication.

