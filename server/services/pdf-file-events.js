const fs = require('fs');
const { join } = require('path');
const puppeteer = require('puppeteer');
const { HttpError } = require('../middleware');

/**
 * generate PDF from web page
 */
const printPDF = async (cvPage) => {
    let directoryExists = fs.statSync(join(__dirname + '../../../public/generated-files'));
    let fileExists = fs.statSync(join(__dirname + '../../../public/generated-files/konstantin_peschanov_cv.pdf'));

    if (directoryExists.err) {
        console.log('directoryExists', directoryExists);
    }

    return cvPage
};

/**
 * generate PDF from web page and send by email
 */
const sendPDF = async () => {
    fs.stat(join(__dirname + '../../../public/generated-files/konstantin_peschanov_cv.pdf'), async (err, stats) => {
        console.log('stats', stats)
        if (err) {
            fs.mkdirSync(join(__dirname + '../../../public/generated-files'));
            const browser = await puppeteer.launch({ args: ['--no-sandbox'], headless: true });
            const page = await browser.newPage();

            await page.setViewport({ width: 1920, height: 1080 });
            await page.goto(cvPage, { waitUntil: 'networkidle0'});

            const pdf = await page.pdf({
                path: 'public/generated-files/konstantin_peschanov_cv.pdf',
                printBackground: true,
                format: 'A4'
            });

            await browser.close();

            return new Promise((resolve, reject) => pdf.length ? resolve(pdf) : reject(new HttpError()))
        }
    });
};

module.exports = {
    printPDF,
    sendPDF
};