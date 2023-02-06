require('./Constants');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const ordersRouter = require('./routes/orders');

const app = express();
const skip = (req, res) => res.statusCode <= 200;

app.use(cors());
app.use(logger('dev', {skip: skip}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/orders', ordersRouter);

module.exports = app;
