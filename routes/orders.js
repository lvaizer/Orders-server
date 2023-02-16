const express = require('express');
const router = express.Router();
const Controller = require('../controllers/OrdersController');
const responseObj = require('../ResponseObj');

router.get('/dates', function (req, res) {
    Controller.getOrdersDates()
        .then(data => {
            res.write(responseObj(data, null))
        })
        .catch(err => {
            res.write(responseObj(null, err))
        })
        .finally(() => res.end());
});

router.get('/:year/:month/:day', function (req, res) {
    Controller.getOrdersByDate(req.params)
        .then(data => {
            res.write(responseObj(data, null))
        })
        .catch(err => {
            res.write(responseObj(null, err))
        })
        .finally(() => res.end());
});

router.post('/new/order', function (req, res) {
    Controller.createNewOrder(req)
        .then(data => {
            res.write(responseObj(data, null))
        })
        .catch(err => {
            res.write(responseObj(null, err))
        })
        .finally(() => res.end());
});

router.post('/update', function (req, res) {
    Controller.updateOrder(req)
        .then(data => {
            res.write(responseObj(data, null))
        })
        .catch(err => {
            res.write(responseObj(null, err))
        })
        .finally(() => res.end());
});

router.post('/delete', function (req, res) {
    Controller.deleteOrder(req)
        .then(data => {
            res.write(responseObj(data, null))
        })
        .catch(err => {
            res.write(responseObj(null, err))
        })
        .finally(() => res.end());
});


module.exports = router;
