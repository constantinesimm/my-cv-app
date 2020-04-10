const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const service = require('../services');
const { HttpError } = require('../middleware');

router.post('/cv/download/pdf', async (req, res, next) => {
    service
        .printPDF(`http://localhost:3000`)
        .then(pdf => {
            res.writeHead(200, {
                "Content-Type": "application/pdf",
                "Content-Disposition": "attachment; filename='Junior_node_js-Konstantin_Peschanov.pdf'",
            });

            return res.end(pdf);
        })
        .catch(next);
});

router.post('/cv/send-to-email/pdf', async (req, res, next) => {

});

module.exports = router;
