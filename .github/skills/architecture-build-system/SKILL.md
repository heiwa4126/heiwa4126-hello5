---
name: architecture-build-system
description: Dual module support pattern and build flow.
---

# Architecture and Build System

Dual Module Support Pattern:

- Uses tsdown for bundling with both ESM (.js) and CJS (.cjs) outputs
- package.json exports field provides dual compatibility: "import": "./dist/index.js" and "require": "./dist/index.cjs"
- TypeScript is configured with "module": "nodenext" for modern module resolution
- CLI entry point (src/cli.ts) uses ESM imports with .js extension for compatibility

Critical build flow:

- pnpm run build # tsdown builds ESM/CJS/IIFE formats + types
- pnpm test # vitest with TypeScript support
- pnpm run smoke-test # Tests all usage patterns (ESM/CJS/TS/IIFE)
