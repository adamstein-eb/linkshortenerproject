# Auth — Clerk

## Overview

All authentication in this project is handled exclusively by **Clerk**. No other auth libraries, custom JWT logic, or session handling should be used.

## Rules

- **Never** implement custom auth. All user identity, sessions, and tokens must come from Clerk.
- Use Clerk's server helpers (`auth()`, `currentUser()`) for server-side auth checks in Server Components and Route Handlers.
- Use Clerk's client hooks (`useAuth()`, `useUser()`) for client-side auth state.
- Never read `req.cookies` or manually decode tokens to determine auth state.

## Protected Routes

- `/dashboard` is a protected route. Users who are **not** signed in must be redirected to sign in before accessing it.
- Enforce this via `clerkMiddleware` in `proxy.ts` using `createRouteMatcher` to mark `/dashboard(.*)` as protected.

## Homepage Redirect

- If an authenticated user visits `/` (the homepage), redirect them to `/dashboard`.
- Implement this redirect in the homepage Server Component using `auth()` — check for a `userId` and call `redirect('/dashboard')` if present.

## Sign In / Sign Up

- Sign in and sign up must **always** be triggered as a **Clerk modal** (not a dedicated page route).
- Use `<SignInButton mode="modal">` and `<SignUpButton mode="modal">` from `@clerk/nextjs`.
- Do **not** create `/sign-in` or `/sign-up` page routes.

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key |
| `CLERK_SECRET_KEY` | Clerk secret key |

Never hardcode these values — always reference them via `process.env`.

## Middleware Example

```ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
```
