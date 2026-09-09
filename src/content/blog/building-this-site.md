---
title: "Building This Site: Notes on a Fast, Accessible Portfolio"
description: "A short writeup on the stack and decisions behind this site — a sample post showing the blog post pattern. [REPLACE WITH YOUR OWN POST]"
date: 2026-01-15
tags: ["meta", "astro", "web-performance"]
draft: false
---

_[This is a sample post. Replace it with your own writing, or delete it and
add new files to `src/content/blog/` following the same pattern.]_

## Why a static site

For a portfolio and blog, there's no real need for server-rendered pages or
a database. A static site generator gives fast pages, a small attack
surface, and hosting that's effectively free on GitHub Pages.

## The stack

This site is built with [Astro](https://astro.build): content is authored
as Markdown with frontmatter, pages compile to plain HTML/CSS at build
time, and only the small bits that need it (the theme toggle, the mobile
nav) ship any JavaScript at all.

## Adding a post

Every post in this blog is a Markdown file in `src/content/blog/` with a
frontmatter block like this one — `title`, `description`, `date`, `tags`,
and an optional `draft` flag. Add a new file and it shows up on the
[blog index](/blog/) automatically, newest first.

## What's next

Swap this post out, add your own project write-ups, and connect a custom
domain when you're ready. See the project README for the full checklist.
