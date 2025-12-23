import { describe, expect, it } from "vitest";
import pkg from "../package.json" with { type: "json" };
import { hello, version } from "../src/index.js";

describe("hello", () => {
	it('should return "Hello!"', () => {
		expect(hello()).toBe("Hello!");
	});
	it("should return the correct version", () => {
		expect(version).toBe(pkg.version);
	});
});
