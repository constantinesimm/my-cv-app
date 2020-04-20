/**
 * define app dependencies
 */
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { mongoDatabase } = require('./server/service');
const { HttpError } = require('./server/middleware');

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
server.use(logger('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'public')));

/**
 * app controller routes
 */

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
