---
title: "How I Use AI in 2026"
date: "2026-06-11"
layout: "../../layouts/BlogLayout.astro"
category: "insights"
posted: true
---

Everyone is giving their view on AI nowadays, so I want to share my own experience.

For context, I'm a fullstack web developer. I have an office job working on internal tools, as well as two SaaS products of my own.

When I started using AI, I didn't trust it to write a single line of code. I didn't find any real use case for it aside from asking ChatGPT things instead of googling. This year, though, I have been using AI way more.

First of all, my editor. I currently use Cursor and have no intention of changing it. Cursor has proven to be an amazing development tool — its price ($20/month) is low, but it offers very high limits and a ton of functionality. Aside from Cursor, I only use ChatGPT sometimes.

My favourite feature is tab autocomplete. I can't code without it. I love it. It saves so much time in my day-to-day development, not only by completing code before I even type it, but by investigating values and context ahead of me. It feels like a little gremlin constantly reading my mind, looking for context to write what I'm thinking about and filling it in instantly. Damn, it's fast.

I may need to write a function on my Hono backend similar to one I already have, only changing some names, and by the time I write the first three letters, Cursor completes the whole function without me even realizing it.

Or I need to pass a value to a function, an enum whose options I don't remember. As soon as I set my cursor inside the function parameters, it autocompletes the enum value I was thinking of. That alone was a complete game changer for my development cycle.

Second, the "Ask" tab. This is the one I use the most. You can ask anything about your code or any documentation. You only need to pass the correct context (files, URLs, etc.) and it will answer almost any question you have. It's like having a magic sphere of all-knowledge.

Then there's the "Agent" tab. I don't find myself using it that much. I mostly use it for simple refactoring, writing functions I'm too lazy to write from scratch, creating new modules based on existing ones, and coding examples or MVPs for some features.

I don't really like using agent mode to write a lot of code. Most of the time I realize that writing it myself with autocomplete is actually faster. By the time I've provided the right context, written the spec in English, and waited for it to act and write the code, I could have just started writing and spamming tab — which creates fast, solid code.

As for "Plan" mode, I don't use it for anything. My bar for code quality is too high for AI, and while sometimes it may write exactly what I was thinking, it's a gamble. You never know when it will start hallucinating. Writing new functions or completely new ideas with AI is completely out of the question. If it can't even reproduce code I already wrote once and gave as context, the code it generates just by "asking in plain English" is garbage.

While I sometimes use it for trivial projects or automation tasks, I would **never** let AI code by itself unsupervised. It just isn't good enough, even with state-of-the-art Claude models.

I know some people will say that AI can write code as good as themselves, as a senior dev, or even as Linus Torvalds. But I find it can't even keep a little context.

My girlfriend, who is studying literature, once said: "If you think AI can write as good or better than you, you should quit. AI is not good, you are just that bad."

At least for the products I care about, I want to give my users the best quality software I can. And AI alone is not good enough for that.

However, using AI as a tool, I have managed to improve the quality of my code, reduce vulnerabilities and bugs, and even increase the speed at which I develop features.

Using it to autocomplete my own thoughts, write examples, investigate documentation, audit my codebase, catch race conditions, teach me about better practices, and many other possibilities.

It really is the best tool I could ask for.
