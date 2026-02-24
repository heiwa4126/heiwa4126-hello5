---
name: 'TypeScript Standards'
description: 'Coding conventions for TypeScript files'
applyTo: '**/*.ts'
---

# TypeScript Standards

## Formatting

- **Line Width**: 100 characters
- **Indentation**: Tabs
- **Quotes**: Single quotes
- **Semicolons**: Required
- **Trailing Commas**: Use on multiline objects and arrays
- **Formatter**: Biome (not Prettier)

## Import/Export Conventions

- Always use `.js` extension in import paths, even from `.ts` files:
  ```typescript
  import { hello } from "../src/index.js";
  ```
- Use JSON import assertions:
  ```typescript
  import pkg from "../package.json" with { type: "json" };
  ```
- Prefer named exports over default exports

## Type and Function Style

- Use explicit return types for public functions
- Avoid `any` types
- Use `const` for immutable declarations
- Use `function` for named function declarations
- Use `as const` for literal types

## CLI Entry Points

- Must start with shebang: `#! /usr/bin/env node`
- Import source files with `.js` extensions
