const puppeteer = require('puppeteer');
const { HttpError } = require('../middleware');

const printPDF = (cvPage) => {
    return new Promise(async (resolve, reject) => {
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();

        await page.setViewport({ width: 1920, height: 1080 });
        await page.goto(cvPage, { waitUntil: 'networkidle0'});

        const pdf = await page.pdf({ path: 'public/files/konstantin_peschanov_cv.pdf', printBackground: true, format: 'A4' });

        return pdf ? resolve({ success: true }) : reject(new HttpError());
    });
};


module.exports = {
    printPDF
};