import generator from "../src";
import fs from "fs";
import path from "path";

describe("HTML to PDF Generator", () => {
	it("should return a buffer from html", async () => {
		const data = await generator(`<h1>Test</h1>`);
		expect(Buffer.isBuffer(data)).toBe(true);
	});

	it("should generate a pdf file", async () => {
		const data = await generator(`<h1>Test</h1>`);

		const tmpFolder = path.resolve(__dirname, "tmp");
		fs.mkdirSync(tmpFolder, { recursive: true });

		const filePath = `${tmpFolder}/example.pdf`;
		fs.writeFileSync(filePath, data);

		expect(fs.existsSync(filePath)).toBe(true);
	});
});
