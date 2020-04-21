/**
 * define app dependencies
 */
const express = require('express');
const { join } = require('path');
const cors = require('cors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { mongoDatabase } = require('./server/components');
const { HttpError } = require('./server/middleware');
const controller = require('./server/controller');

const app = express();

/**
 * connect MongoDB
 */
mongoDatabase()
    .then( () => console.log('MongoDB connected'))
    .catch(error => console.log(`MongoDB connection error with message: "${ error }"`));

/**
 * app global middleware
 */
if (process.env.NODE_ENV !== 'production') app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, 'dist')));
app.use(express.static(join(__dirname, 'public')))

app.get('/.well-known/acme-challenge/:link', (req, res) => {
    if (req.params.link === 'SsuC3iP3RI1V3neVCHRG_rm-ME_JQ106-XPbx2hqvmE') res.send('SsuC3iP3RI1V3neVCHRG_rm-ME_JQ106-XPbx2hqvmE.hl9UFsx6RJv3fmBlHKMklQCzUi4hucdLb5qCF3XIzi4');
});

app.get('*', (req, res) => res.sendFile('index.html', { root: 'dist'}));
/**
 * app controller routes
 */
app.use('/api/v1', controller.createPDF);

/**
 * catch 404 error and send to error handler fn
 */
app.use((req, res, next) => next(new HttpError(404, `Not Found ${req.path}`)));

/**
 * app central error handler
 */
app.use((error, req, res, next) => {
    if (error.status) return res.status(error.status).json({ message: error.message });
    if (error.errors) return res.status(400).json({ error: { name: error.name, errors: error.errors } });

    next(error);
});

module.exports = app;
