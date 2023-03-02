require('./Constants');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// const cors = require('cors');

const ordersRouter = require('./routes/orders');

const app = express();
const skip = (req, res) => res.statusCode <= 200;

// app.use(cors());
app.use((req,res,next)=>{
    console.log(req.headers.origin);
    console.log(res.headers)
    res.header("Access-Control-Allow-Method", "GET,POST");
    next();
})
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
