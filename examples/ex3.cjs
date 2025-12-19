// ブラウザ向けグローバルスクリプトをnodeのvmモジュールで実行してテストする
// npm build した後に実行すること

const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const vm = require("node:vm");

const code = readFileSync(join(__dirname, "../dist/hello.global.js"), "utf8");
vm.runInContext(code, vm.createContext(global));

const { hello } = global.Heiwa4126Hello5;

console.log(hello()); // "Hello!"
