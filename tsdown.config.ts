import { defineConfig } from "tsdown";

function fixCjsExtension({ format }: { format: string }) {
	if (format === "cjs") return { js: ".cjs" };
	return { js: ".js" };
}

export default defineConfig([
	{
		// nodejs libs(ESM + CJS), browser libs(ESM)
		clean: true,
		entry: ["src/index.ts"],
		format: ["esm", "cjs"],
		outDir: "dist",
		unbundle: true,
		sourcemap: false,
		minify: false,
		dts: true,
		outExtensions: fixCjsExtension,
	},
	{
		// cli (ESM only)
		clean: false,
		entry: ["src/cli.ts"],
		format: ["esm"],
		outDir: "dist",
		unbundle: true,
		sourcemap: false,
		minify: true,
		dts: false,
		outExtensions: fixCjsExtension,
	},
	// Classic Script for Browser
	{
		clean: false,
		entry: ["src/index.ts"],
		format: ["iife"],
		outDir: "dist",
		unbundle: false,
		sourcemap: false,
		dts: false,
		globalName: "Heiwa4126Hello5",
		minify: true,
		outputOptions: {
			// outExtensionsでは対応できない。hello.iife.global.js になる
			// [name] はエントリファイル名 (hello) に置き換わります
			entryFileNames: "[name].global.js",
		},
	},
]);
