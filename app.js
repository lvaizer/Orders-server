const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const ordersRouter = require('./routes/orders');

const app = express();
const skip = (req, res) => res.statusCode <= 200;
app.use(helmet());
app.use(cors({methods: "GET,POST"}));
app.use(logger('dev', {skip: skip}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/orders', ordersRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, function (err) {
    if (err) console.log("Error in server setup")
    console.log(
        new Date().toLocaleString(),
        "Server listening on Port",
        PORT,
        process.env.NODE_ENV,
        'environment'
    );
});

module.exports = app;
