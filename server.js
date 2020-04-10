/**
 * if app environment mode is development - get env variables
 */
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

/**
 * define app dependencies
 */
const express = require('express');
const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { mongoDatabase } = require('./server/components');
const { HttpError } = require('./server/middleware');
const controller = require('./server/controller');

const server = express();

/**
 * connect MongoDB
 */
mongoDatabase()
    .then( () => console.log('MongoDB connected'))
    .catch(error => console.log(`MongoDB connection error with message: "${ error }"`));

/**
 * app global middleware
 */
if (process.env.NODE_ENV !== 'production') server.use(cors());
server.use(logger('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'dist')));
server.use(express.static(path.join(__dirname, 'public')));
server.get('*', (req, res) => res.sendFile('index.html', { root: 'dist'}));

/**
 * app controller routes
 */
server.use('/api/v1', controller.createPDF);


/**
 * catch 404 error and send to error handler fn
 */
server.use((req, res, next) => next(new HttpError(404, `Not Found ${req.path}`)));

/**
 * app central error handler
 */
server.use((error, req, res, next) => {
    if (error.status) return res.status(error.status).json({ message: error.message });
    if (error.errors) return res.status(400).json({ error: { name: error.name, errors: error.errors } });

    next(error);
});

module.exports = server;
