import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/main.ts", "src/hello.ts"],
	format: ["esm", "cjs", "iife"],
	outDir: "dist",
	minify: false,
	bundle: false,
	splitting: false,
	sourcemap: true,
	clean: true,
	name: "Hello5",
	dts: {
		resolve: true,
		// entry: ["src/main.ts", "src/hello.ts"],
	},
});
