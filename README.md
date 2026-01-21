# heiwa4126-hello5 (@heiwa4126/hello5)

[![npm version](https://img.shields.io/npm/v/@heiwa4126/hello5.svg)](https://www.npmjs.com/package/@heiwa4126/hello5)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green.svg)](https://nodejs.org/)

TypeScript hello world library with dual ES modules/CommonJS support. Features GitHub Actions trusted publishing to npmjs with Sigstore attestation.

Modified version of [heiwa4126/heiwa4126-hello4](https://github.com/heiwa4126/heiwa4126-hello4) with the following changes:

- ~~Rewritten using [egoist/tsup](https://github.com/egoist/tsup)~~
- Rewritten using [rolldown/tsdown](https://github.com/rolldown/tsdown/)
- Migrated from npm to pnpm
- Extracted scripts/clean-pkg.mjs into a reusable package (@heiwa4126/clean-publish-scripts)

## Installation

```bash
pnpm add @heiwa4126/hello5
# or
npm install @heiwa4126/hello5
```

## Usage

### As a library

#### ES Modules (MJS)

```typescript
import { hello } from "@heiwa4126/hello5";

console.log(hello()); // "Hello!"
```

#### CommonJS (CJS)

```javascript
const { hello } = require("@heiwa4126/hello5");

console.log(hello()); // "Hello!"
```

#### TypeScript

```typescript
import { hello } from "@heiwa4126/hello5";

console.log(hello()); // "Hello!"
```

#### Browser ESM Module Example (CDN)

ESM.sh:

```html
<!DOCTYPE html>
<div id="app">loading...</div>

<script type="module">
  import { hello } from "https://esm.sh/@heiwa4126/hello5";

  document.getElementById("app").innerText = hello();
</script>
```

Other CDNs:

- jsDelivr - [@heiwa4126/hello5 CDN by jsDelivr - A CDN for npm and GitHub](https://www.jsdelivr.com/package/npm/@heiwa4126/hello5)
- unpkg - <https://app.unpkg.com/@heiwa4126/hello5>

#### Browser Classic Script Example (CDN)

```html
<!DOCTYPE html>
<div id="app">loading...</div>

<script src="https://cdn.jsdelivr.net/npm/@heiwa4126/hello5/dist/index.global.min.js"></script>
<script>
  document.getElementById("app").innerText = Heiwa4126Hello5.hello();
</script>
```

### As a CLI tool

After installation, you can use the CLI command:

```console
$ heiwa4126-hello5 -h

Usage: heiwa4126-hello5 [-h|--help] [-v|--version]

Options:
  -h, --help     Show this help message
  -v, --version  Show version

$ heiwa4126-hello5

Hello!
```

## Development

```bash
# Install dependencies
pnpm audit
pnpm install

# lint, test, clean, build, pack and smoke test (without publishing)
pnpm run prepublishOnly
```

## Build Output

The project builds to both ES modules and CommonJS formats in a flat structure:

- `dist/` - Both ES modules (`.js`) and CommonJS (`.cjs`) files

## Scripts

- `pnpm run build` - Build both ESM and CJS versions
- `pnpm run test:watch` - Run tests in watch mode
- `pnpm test` - Run tests once
- `pnpm run clean` - Remove build artifacts

## License

MIT

## Note

[NOTE-ja.md](https://github.com/heiwa4126/heiwa4126-hello5/blob/main/NOTE-ja.md) (on GitHub)
これがこのプロジェクトの本体。
