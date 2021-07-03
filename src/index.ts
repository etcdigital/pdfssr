import puppeteer, { PDFOptions } from "puppeteer";

const defaultOptions: PDFOptions = {
	width: 8.3,
	height: 11.7,
	headerTemplate: "",
	footerTemplate: "",
	format: "a4",
	margin: { bottom: 10, left: 10, right: 10, top: 10 } /* in pixel, maybe? */,
	landscape: false,
	printBackground: false,
	scale: 1,
};

const generatePdf = async (
	html: string,
	options: PDFOptions = defaultOptions,
	puppeteerArgs: string[] = [],
): Promise<Buffer> => {
	const args = ["--no-sandbox", "--disable-setuid-sandbox", ...puppeteerArgs];

	const browser = await puppeteer.launch({ args: args });
	const page = await browser.newPage();

	await page.setContent(html);

	const data = await page.pdf(options);
	await browser.close();

	return Buffer.from(data);
};

export default generatePdf;
