# PristineUI Monorepo

PristineUI is a clean, composable React component library built with Tailwind CSS.

This monorepo contains the library itself, a playground for fast iteration, a demo/landing site, and Storybook.

---

## Repo Structure

- `packages/pristineui` — React component library (published to npm)
- `apps/playground` — Next.js + Tailwind playground to develop/test components quickly
- `apps/site` — Demo / landing site that consumes the package
- `.changeset/` — Changesets (versioning + changelog)

---

## Prerequisites

- Node.js (18+)
- pnpm

Install pnpm (if you don't have it):

```bash
npm i -g pnpm
```

---

## Install

From the repo root:

```bash
pnpm install
```

---

## Run (everything)

From the repo root:

```bash
pnpm dev
```

This is intended to run:
- `packages/pristineui` (tsup watch)
- `packages/pristineui` Storybook
- `apps/playground` Next dev
- `apps/site` Next dev

---

## Run (individually)

### UI package (watch mode)

```bash
pnpm -C packages/pristineui dev
```

### Storybook

```bash
pnpm -C packages/pristineui storybook
```

### Playground (Next.js)

```bash
pnpm -C apps/playground dev
```

### Site / Landing (Next.js)

```bash
pnpm -C apps/site dev
```

---

## Build (package)

### Build JS bundle

```bash
pnpm -C packages/pristineui build
```

### Build CSS

```bash
pnpm -C packages/pristineui build:css
```

### Notes

`prepack` is configured in `packages/pristineui/package.json`:

- It runs `pnpm build && pnpm build:css`
- So publishing will include fresh JS + CSS in `dist/`

---

## Using the package (in an app)

Install:

```bash
pnpm add @gmook9/pristine-ui
```

Import components:

```ts
import { Button, Card } from "@gmook9/pristine-ui";
```

Import styles (published from the package):

```ts
import "@gmook9/pristine-ui/styles.css";
```

---

## Changesets (versioning)

Create a changeset (interactive):

```bash
pnpm changeset
```

Apply version bumps (writes new versions + changelog updates):

```bash
pnpm changeset version
```

---

## Publish (npm)

Make sure you're on `main`, clean working tree, and logged in:

```bash
npm whoami
npm login
```

Publish via changesets:

```bash
pnpm changeset publish
```

## Git tags

List tags:

```bash
git tag
```

Push tags (if they weren't pushed):

```bash
git push --tags
```

