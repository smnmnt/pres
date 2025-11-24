import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";

const screenshotsDir = "screenshots";

// Очищаем папку со скриншотами
if (fs.existsSync(screenshotsDir)) {
  fs.rmSync(screenshotsDir, { recursive: true, force: true });
}
fs.mkdirSync(screenshotsDir);

async function takeScreenshot(url: string, filename: string) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto(url, { waitUntil: "networkidle0", timeout: 10000 });

  // await new Promise((resolve) => setTimeout(resolve, 500)); // 0.5 секунды

  const element = await page.$("#page");
  if (element) {
    await element.screenshot({ path: path.join(screenshotsDir, filename) });
  }

  await browser.close();
}

const baseUrl = "http://localhost:3000";
// Список эндпоинтов страниц
const pages = [
  "/1",
  "/2",
  "/3",
  "/4",
  "/5",
  "/6",
  "/7",
  "/8",
  "/9",
  "/10",
  "/11",
  "/12",
  "/13",
  "/14",
  "/15",
  "/16",
];

async function main() {
  for (const endpoint of pages) {
    const url = baseUrl + endpoint;
    const filename =
      endpoint === "/" ? "index.png" : endpoint.slice(1) + ".png";
    await takeScreenshot(url, filename);
    console.log(`Screenshot saved: ${filename}`);
  }
}

main().catch(console.error);
