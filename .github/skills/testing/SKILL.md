---
name: testing
description: Unit tests, smoke tests, and browser examples.
---

# Testing

- Unit tests: Run `pnpm test` to execute vitest tests in src/ with coverage reporting
- Smoke tests: examples/ex1.mjs, examples/ex1.cjs, examples/ex1.ts, examples/ex3.cjs (after `pnpm run build`, run `pnpm run smoke-test` to verify all module formats work correctly)
- Browser examples: examples/local_http/ directory
- Test server: scripts/test_server.mjs provides local HTTP server for browser testing
