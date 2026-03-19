---
title: "My ideal stack for SaaS"
date: "2025-08-14"
layout: "../../layouts/BlogLayout.astro"
category: "insights"
posted: true
---

This year, I have been building a pair of projects, [Capupet](https://capupet.com) and [Churchpaq](https://churchpaq.com), these are very similar in their technical structure; actually, I would say that most B2B administrative tools have the same design patterns.

For building these, I need a tech stack that is both performant and great in its DX (mainly good TypeScript support). Luckily, I found exactly what I was looking for. Here is my preferred stack for SaaS:

## Frontend

Frontend is by far the most creative and unique when it comes to building software. I separate the development in three parts: Landing, App and UGC Pages.

For the frontend I use the current king, [React](https://react.dev), Even with all the complaints about it, and new frameworks being launched each month, I still find React incredibly pleasing to work with. It may sacrifice performance and bundle size, but you get an amazing community, dozens of npm packages and a super simple to understand render loop.

In my npm packages I can highlight TanStack, specifically [TanStack Router](https://tanstack.com/router/latest) and [TanStack Query](https://tanstack.com/query/latest) which are my favourite tools, also [react-hook-form](https://react-hook-form.com/), [sonner](https://sonner.emilkowal.ski/) and [lucide](https://lucide.dev/icons/).

For styling I use my greatest love: [TailwindCSS](https://tailwindcss.com/), styling with utility classes is so easy that I don't see any reason to go back. I also use [shadcn](https://ui.shadcn.com/) for components, although I modify it a lot.

For the app. I believe there is nothing better for a dashboard than [vite](https://vite.dev), this allows you to create SPA's with incredible performance, super simple setup, and easy bundling.

For the dashboard I use the framework for the web: [Astro](https://astro.dev), this is BY FAR my favourite meta-framework. It offers SSG, SSR and CSR. Their html-first approach and island architecture makes it so performant and flexible that it feels like cheating.

In these apps I allow the users to create a custom website, I also use Astro for this, I just create some SSR routes and fetch the website information from my API.

## Backend

I like using one language for frontend/backend, so I use [hono](https://hono.dev), it's similar to Express but better. It offers better performance, RPC to shared types with frontend, incredible performance, it can deploy almost anywhere, it has amazing TypeScript support and amazing docs.

In packages I can highlight [Zod](https://zod.dev) for input sanitization, [Drizzle](https://orm.drizzle.team) as an ORM, [Multer](https://www.npmjs.com/package/multer) for file processing, [Sharp](https://www.npmjs.com/package/sharp) for image optimization and [better-auth](https://better-auth.com/) for auth.

## Database

I can only think of one database, for me, the GOAT of SQL: [PostgreSQL](https://www.postgresql.org/) this database is amazing. Incredible performance, indexes, JSON, plugins, generated columns, and I could go on all day.

Complementing it, I use [Redis](https://redis.io) for caching common requests, it's an in-memory KV database. I use Redis for convenience, but any KV database should do the trick.

## Deployment

I mainly deploy on two sites: [Cloudflare](https://cloudflare.com/) and [Railway](https://railway.com/), on Cloudflare I deploy the frontend, Astro works great on workers, and the SPA can be deployed easily on pages, this setup offers amazing performance for ~$0 dollars. I use Railway for the API, database and cache. Having it all inside a Railway location offers minimum latency, low costs, amazing simplicity, security and scalability without having to deal with complicated DevOps.

## Development tools

I use [pnpm](https://pnpm.io/) as a package manager, [Docker](https://www.docker.com) for containerization, [Bun](https://www.docker.com/) as a runtime, [Turborepo](https://turbo.build/repo/docs) for sharing components between my two frontend repos, [Prettier](https://prettier.io/) for formatting, [ESLint](https://eslint.org/) for linting, [Cursor](https://cursor.com/) for autocomplete among others.

## Results

This stack achieves: one source of truth for types (even among frontend and backend), amazing performance, incredibly low costs, great security, DX and flexibility.

This stack may change over time, but the philosophy probably won't.
