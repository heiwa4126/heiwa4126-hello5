import { defineConfig } from "tsup";

export default defineConfig([
	{
		// nodejs libs(ESM + CJS), browser libs(ESM)
		entry: ["src/hello.ts"],
		format: ["esm", "cjs"],
		outDir: "dist",
		bundle: false,
		splitting: false,
		sourcemap: false,
		minify: false,
		clean: true,
		dts: {
			resolve: true,
			entry: ["src/hello.ts"],
		},
	},
	{
		// cli (ESM only)
		entry: ["src/cli.ts"],
		format: ["esm"],
		outDir: "dist",
		bundle: false,
		splitting: false,
		sourcemap: false,
		minify: true,
		clean: true,
		dts: false,
	},
	// Classic Script for Browser
	{
		entry: ["src/hello.ts"],
		format: ["iife"],
		outDir: "dist",
		splitting: false,
		sourcemap: false,
		clean: false,
		dts: false,
		globalName: "Heiwa4126Hello5",
		bundle: true,
		minify: true,
		outExtension: () => ({ js: ".global.js" }),
	},
]);
