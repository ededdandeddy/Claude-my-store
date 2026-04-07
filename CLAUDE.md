@AGENTS.md

# My Store — Project Context for Claude Code

## What this project is
A Next.js e-commerce store selling physical products.
Built as a learning project by a beginner-to-intermediate developer.

## Tech stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS v4
- Playwright + TypeScript (for tests — added in Phase 4)
- Stripe test mode (for payments — added in Phase 3)
- Vercel (for deployment — added in Phase 2)

## Code style rules — always follow these
- Use Tailwind classes for ALL styling. Never write plain CSS except in globals.css
- Add a short comment above any code a beginner might not understand
- Keep components small and focused — one job per component
- Use TypeScript types for all props and function return values
- Prefer clear, readable code over clever short code

## File structure
- Pages live in app/ — each folder with a page.tsx becomes a URL route
- Reusable components live in app/components/
- Static files (images, icons) go in public/

## Git branch rules
- dev → daily work branch (where all changes start)
- staging → testing branch (push here to test before going live)
- main → production branch (only merge here when fully tested)
- Never commit directly to main

## Current project status
- Phase 1 in progress
- Next.js app created, running at localhost:3000
- Tailwind v4 confirmed
- GitHub repo not set up yet

## Phases overview
- Phase 1: Foundation (current) — project setup, homepage, GitHub
- Phase 2: Vercel deployment — 3 live environments
- Phase 3: Build all 5 store pages
- Phase 4: Playwright E2E tests
- Phase 5: GitHub Actions CI/CD pipeline
- Phase 6: ClickUp integration + maintenance