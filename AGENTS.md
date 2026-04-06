# Agent Instructions — Link Shortener Project

This file is the entry point for LLM coding agents working in this codebase. It outlines the project's purpose and provides links to detailed instruction documents in the `/docs` directory.

> [!CAUTION]
> **BLOCKING REQUIREMENT:** You MUST read every relevant `/docs` instruction file in full BEFORE writing or generating ANY code. This is non-negotiable. Do not assume, infer, or skip ahead — open and read the file first.

## Project Purpose

A full-stack link shortener application where authenticated users can create, manage, and share shortened URLs. Built on Next.js App Router with Clerk for auth and Neon (PostgreSQL) for persistence.

## Instruction Documents

**STOP. Before you write a single line of code, you MUST open and read every doc file that is relevant to your task.** Skimming, summarizing from context, or relying on memory is not acceptable — load the file and read it completely.

- [Auth](docs/auth.md) — Clerk authentication, protected routes, modal sign-in/sign-up, homepage redirect
- [UI](docs/ui.md) — shadcn/ui components, no custom components, adding/composing components

If your task touches auth → read `docs/auth.md` first. If your task touches UI → read `docs/ui.md` first. If it touches both → read both before starting.

## Quick Reference

- **Language:** TypeScript (strict mode)
- **Framework:** Next.js 16 App Router
- **Auth:** Clerk
- **Database:** Neon PostgreSQL via Drizzle ORM
- **Styling:** Tailwind CSS v4 + shadcn/ui (radix-nova)
- **Icons:** Lucide React
- **Path alias:** `@/` maps to the project root

## Non-Negotiable Rules

1. Never bypass TypeScript strict mode — no `any`, no `@ts-ignore` without an explicit comment explaining why.
2. All database access must go through the Drizzle `db` instance exported from `@/db/index.ts`.
3. All auth checks must use Clerk server helpers — never roll custom auth.
4. All new UI components must be built using shadcn/ui primitives and Tailwind CSS utility classes; no raw CSS files or `style` props.
5. Never commit secrets or hardcode values that belong in environment variables.
6. Do not modify files in `components/ui/` directly — extend or compose them instead.
