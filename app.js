require('./Constants');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const ordersRouter = require('./routes/orders');

const app = express();
const skip = (req, res) => res.statusCode <= 200;
const corsOptions = {
    origin: [
        'https://swapee-api.herokuapp.com/',
        'http://localhost:3000',
        'https://swapee-interface.vercel.app/',
        'https://app.swapee.io',
    ],
};
app.use(cors({
    origin: '*'
}));
app.use(logger('dev', {skip: skip}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/orders', ordersRouter);
app.get('/', (req, res) => {
    res.send('GET request to the homepage')
})
app.get('/test', (req, res) => {
    res.send('GET request to the homepage test')
})

module.exports = app;
