// ブラウザ向けグローバルスクリプトをnodeのvmモジュールで実行してテストする
// npm build した後に実行すること

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { createContext, runInContext } from "node:vm";

// グローバルコンテキストを作成
const sandbox = { window: {}, console };
const context = createContext(sandbox);

// hello.global.js を読み込んで実行
const scriptPath = join(process.cwd(), "dist/hello.global.js");
const scriptCode = readFileSync(scriptPath, "utf-8");
runInContext(scriptCode, context);

// Heiwa4126Hello5 がグローバルに定義されているか確認
if (!context.Heiwa4126Hello5) {
	throw new Error("Heiwa4126Hello5 is not defined in global scope");
}

// hello() 関数を実行
const result = context.Heiwa4126Hello5.hello();
console.log(`Browser global script test: ${result}`);

if (result !== "Hello!") {
	throw new Error(`Expected "Hello!" but got "${result}"`);
}

console.log("✓ Browser global script test passed");
