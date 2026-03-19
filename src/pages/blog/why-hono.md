---
title: "Why Hono?"
date: "2025-08-28"
layout: "../../layouts/BlogLayout.astro"
category: "insights"
posted: true
---

[Hono](https://hono.dev) is by far my favorite way to build APIs.

In the last few years I have written APIs in some of the most popular JS frameworks: [Express](https://expressjs.com), [NestJS](https://nestjs.com), and [Hono](https://hono.dev). After rewriting the same API in all three of them (yeah, I know), I came to the conclusion that most of the time, Hono is the best option.

After breaking things enough times, I realized framework choice is not that important. In many cases, even language choice matters less than we think. They all follow almost the same design patterns.

## Comparing philosophies

**Express** is infinitely customizable. You can use almost any pattern because it does not enforce much. In most tutorials I usually see two files: controller and service (aside from schemas or models). This separates business logic from routing logic, which is clean, but you can still use almost any structure.

**NestJS** has a very different philosophy: it enforces a modular structure. Here you have three files: module, controller, and service. This approach generates way more boilerplate and offers less flexibility in exchange. You get a rock-solid structure, stricter import boundaries, and in a team, way easier collaboration, fewer doubts, and more clarity.

**Hono** is a newer alternative. Similar to Express, it is also pretty unopinionated, but normally you would use a router-first file structure. Here, you generate only one file for routing and business logic. This may seem like dirty code (sorry uncle Bob), but once you see the advantages, it is a no-brainer.

By doing this, you don't have to search another file for the request body schema or apply types in two places (hurting the "one source of truth" philosophy). You also don't need to open another file to check if params come in query or body, which headers you return, or what permissions are needed. You have it all in one place.

Although this may look like it doesn't scale well, Hono offers a solution for multi-route controllers: separate them by path. For example, you can have one file for GET, POST, PUT, DELETE on `/pets`, and another one for `/pets/:id` or `/pets/vaccines`. A file like `pets.routes.ts` can hold validation, handler, and permissions for each endpoint together. This keeps ~4 functions per file and makes your file structure match your API structure.

Hono also offers seamless RPC for sharing types with your frontend. After using any form of RPC, you can't live without it anymore. Although there are solutions like [tRPC](https://trpc.io), [gRPC](https://grpc.io), or [ts-rest](https://ts-rest.com), in Hono you don't need extra work. You don't change protocol or define separate contracts. You just activate it and, like magic, get end-to-end type safety. This is by far my favorite feature.

Hono is built on web standards, and aside from my obsession with standards (shoutout to ISO), this lets it run almost anywhere: [Node.js](https://nodejs.org), [Bun](https://bun.sh), [Cloudflare Workers](https://workers.cloudflare.com), etc. I love this because I can move providers easily, even between serverless environments (shoutout to [Next.js](https://nextjs.org)).

Built-in middleware may seem like an extra, but it is pretty useful. You have middleware for JWT, CORS, language, cache, body limit, compression, auth, etc. And building custom middleware is pretty easy.

I find myself writing less code, with fewer doubts, faster access to debugging information, and fighting less with context to get the job done.

This is definitely a love letter to Hono <3.
