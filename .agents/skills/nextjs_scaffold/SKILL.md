---
name: nextjs_scaffold
description: Initialise the Next.js 16 project with the locked tech stack — pnpm, TypeScript strict, Tailwind v4.3, shadcn/ui, Framer Motion, Recharts. Sets up the project skeleton in app_build/.
---

# Next.js Project Scaffold

## When to Use

At the very start of Phase 1, or when the project needs to be re-initialised from scratch.

## Pre-requisites

- Node.js >= 20 installed
- pnpm installed globally (`npm install -g pnpm`)

## Instructions

### 1. Initialise Next.js

```bash
cd app_build
pnpm create next-app@latest ./ --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --turbopack --use-pnpm
```

> If `create-next-app` prompts interactively, select: TypeScript=Yes, ESLint=Yes, Tailwind=Yes, src/=Yes, App Router=Yes, import alias=@/*.

### 2. Verify TypeScript Strict Mode

Ensure `tsconfig.json` has:
```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true
  }
}
```

### 3. Install Additional Dependencies

```bash
pnpm add framer-motion recharts
pnpm add -D @types/node
```

### 4. Initialise shadcn/ui

```bash
pnpm dlx shadcn@latest init
```

When prompted:
- Style: Default
- Base colour: Slate
- CSS variables: Yes

Then install commonly needed components:
```bash
pnpm dlx shadcn@latest add button card badge tabs select separator tooltip
```

### 5. Verify Project Structure

After scaffolding, `app_build/` should contain:
```
app_build/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   └── ui/          ← shadcn components
│   └── lib/
│       └── utils.ts     ← shadcn cn() utility
├── public/
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── pnpm-lock.yaml
```

### 6. Test Run

```bash
pnpm dev
```

Confirm the dev server starts on `http://localhost:3000` with no errors.
