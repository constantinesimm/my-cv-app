const puppeteer = require('puppeteer');
const { HttpError } = require('../middleware');

const printPDF = async (cvPage) => {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'], headless: true });
    const page = await browser.newPage();

    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(cvPage, { waitUntil: 'networkidle0'});

    const pdf = await page.pdf({
        path: 'public/files/konstantin_peschanov_cv.pdf',
        printBackground: true,
        format: 'A4'
    });

    await browser.close();

    return new Promise((resolve, reject) => pdf.length ? resolve(pdf) : reject(new HttpError()))
};

const sendPDF = async () => {

};

module.exports = {
    printPDF
};