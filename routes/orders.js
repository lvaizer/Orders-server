const express = require('express');
const router = express.Router();
const {collections} = require('../collections/Collections');
const responseObj = require('../ResponseObj');

router.get('/', function (req, res) {
    collections.orders.getAllOrders()
        .then(data => {
            res.write(responseObj(data, null))
        })
        .catch(err => {
            res.write(responseObj(null, err))
        })
        .finally(() => res.end());
});

router.get('/:year/:month/:day', function (req, res) {
    collections.orders.getOrders(req.params)
        .then(data => {
            res.write(responseObj(data, null))
        })
        .catch(err => {
            res.write(responseObj(null, err))
        })
        .finally(() => res.end());
});

router.get('/:year/:month', function (req, res) {
    collections.orders.getOrders(req.params)
        .then(data => {
            res.write(responseObj(data, null))
        })
        .catch(err => {
            res.write(responseObj(null, err))
        })
        .finally(() => res.end());
});

router.get('/:year', function (req, res) {
    collections.orders.getOrders(req.params)
        .then(data => {
            res.write(responseObj(data, null))
        })
        .catch(err => {
            res.write(responseObj(null, err))
        })
        .finally(() => res.end());
});

router.get('/years', function (req, res, next) {
    setTimeout(() => {
        res.write(JSON.stringify([{
            id: 2023,
            title: 2023,
            link: './' + 2023
        }]));
        res.end();
    }, 3000)
});

router.get('/dates', function (req, res, next) {
    setTimeout(() => {
        res.write(JSON.stringify([{
            id: 2023,
            title: 2023,
            link: './' + 2023
        }]));
        res.end();
    }, 3000);
});

module.exports = router;
