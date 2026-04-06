# UI — shadcn/ui

## Overview

All UI in this project is built exclusively with **shadcn/ui** components. Do not create custom components from scratch.

## Rules

- **Never** build custom UI components. Always use an existing shadcn/ui component or compose from shadcn/ui primitives.
- If a needed component is not yet installed, add it with the CLI: `npx shadcn@latest add <component>`.
- Do **not** modify files in `components/ui/` directly — extend or compose them in new files under `components/`.
- Use Tailwind CSS utility classes for layout and spacing. No raw CSS files or `style` props.
- Icons must use **Lucide React** (`lucide-react`), which is the configured icon library.

## Configuration

| Setting | Value |
|---|---|
| Style | `radix-nova` |
| Base color | `neutral` |
| CSS variables | enabled |
| Component path | `@/components/ui` |
| Utils path | `@/lib/utils` |

## Adding Components

```bash
npx shadcn@latest add <component-name>
```

Components are installed into `components/ui/`. Import them via the `@/components/ui` alias.

## Composing Components

Wrap or compose shadcn/ui components in `components/` (outside `ui/`) when you need custom behavior:

```tsx
// components/submit-button.tsx
import { Button } from '@/components/ui/button';

export function SubmitButton({ loading }: { loading: boolean }) {
  return <Button disabled={loading}>{loading ? 'Saving...' : 'Save'}</Button>;
}
```
