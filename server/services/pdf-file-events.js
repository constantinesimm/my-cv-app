const fs = require('fs');
const { join } = require('path');
const puppeteer = require('puppeteer');
const { HttpError } = require('../middleware');

/**
 * generate PDF from web page and download
 */
const printPDF = async (cvPage) => {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'], headless: true });
    const page = await browser.newPage();

    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(cvPage, { waitUntil: 'networkidle0'});

    const publicPath = join(__dirname + '../../../public/generated-files');

    fs.stat(publicPath, (err, stats, next) => {
        if (err.code === 'ENOENT') {
            fs.mkdir(publicPath, { recursive: true }, (err) => {
                if (err) {
                    console.log('mkdir', err);
                    next();
                }
            })
        }
    });
    const pdf = await page.pdf({
        path: 'public/generated-files/konstantin_peschanov_cv.pdf',
        printBackground: true,
        format: 'A4'
    });

    await browser.close();

    return new Promise((resolve, reject) => pdf.length ? resolve(pdf) : reject(new HttpError()))
};

/**
 * generate PDF from web page and send by email
 */
const sendPDF = async () => {

};

module.exports = {
    printPDF,
    sendPDF
};