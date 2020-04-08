/**
 * if app environment mode is development - get env variables
 */
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

/**
 * define app dependencies
 */
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { mongoDatabase } = require('./server/service');

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

module.exports = server;
