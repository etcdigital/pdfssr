import puppeteer, { PDFOptions } from "puppeteer";

const defaultOptions: PDFOptions = {
	width: 8.3,
	height: 11.7,
	landscape: false,
	printBackground: false,
	scale: 1,
	format: "a4",
	pageRanges: "1",
};

const generatePdf = async (
	html: string,
	options?: PDFOptions,
	puppeteerArgs: string[] = [],
): Promise<Buffer> => {
	const args = ["--no-sandbox", "--disable-setuid-sandbox", ...puppeteerArgs];

	const browser = await puppeteer.launch({ args: args, headless: true });
	const page = await browser.newPage();

	await page.setContent(html);

	const opt = { ...defaultOptions, ...options };
	const data = await page.pdf(opt);
	await browser.close();

	return Buffer.from(data);
};

export default generatePdf;
