const fs = require('fs');
const router = require('express').Router();
const service = require('../module');
const { HttpError } = require('../middleware');

router.post('/get-pdf', async (req, res, next) => {
    await service
        .printPDF(req.body.targetURL)
        .then(data => {
            if (!data.success) next(new HttpError(500, 'something went wrong'))

            const pdfFile = fs.createReadStream('./public/files/konstantin_peschanov_cv.pdf');

            fs.stat('./public/files/konstantin_peschanov_cv.pdf', (err, stats) => {
                if (err) {
                    next(new HttpError(404, err['message'].replace(/(ENOENT:\s)|(,\s\w+\s)/g, ' ').trim()));
                }

                res.setHeader('Content-Type', 'application/pdf');
                res.setHeader('Content-Length', stats.size);
                res.setHeader('Content-Disposition', 'attachment; filename=konstantin_peschanov_cv.pdf');

                return pdfFile.pipe(res);
            })
        })
        .catch(next);
});

module.exports = router;