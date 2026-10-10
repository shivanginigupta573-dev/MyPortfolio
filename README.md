# Portfolio

Personal portfolio site built with [Next.js](https://nextjs.org/) (App Router), React, TypeScript, and Tailwind CSS.

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy environment variables:

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your name, links, and email.

3. Run the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start dev server         |
| `npm run build`| Production build         |
| `npm run start`| Serve production build   |
| `npm run lint` | Run ESLint               |
| `npm run typecheck` | TypeScript check    |

## Environment variables

Public site content lives in `.env.local` (see `.env.example`). Use the `NEXT_PUBLIC_` prefix for values used in the UI.

Server-only secrets (for example `OPENAI_API_KEY` for a future portfolio assistant) belong in `.env.local` **without** the `NEXT_PUBLIC_` prefix.

## Project structure

- `app/` — routes and layouts
- `components/` — UI and page sections
- `data/` — projects, skills, experience (content)
- `lib/` — utilities and env helpers
- `types/` — shared TypeScript types

## Deploy

Works on [Vercel](https://vercel.com/) and similar hosts. Set the same environment variables in your deployment dashboard.
