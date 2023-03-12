const express = require('express');
const router = express.Router();
const Controller = require('../controllers/OrdersController');
const responseObj = require('../ResponseObj');

router.get('/dates', function (req, res) {
    useAndSend(res, Controller.getOrdersDates);
});

router.get('/:year/:month/:day', function (req, res) {
    useAndSend(res, Controller.getOrdersByDate, req.params);
});

router.post('/new/order', function (req, res) {
    useAndSend(res, Controller.createNewOrder, req);
});

router.post('/update', function (req, res) {
    useAndSend(res, Controller.updateOrder, req);
});

router.post('/delete', function (req, res) {
    useAndSend(res, Controller.deleteOrder, req);
});

function useAndSend(res, promise, params) {
    promise(params)
        .then(data => {
            res.write(responseObj(data, null))
        })
        .catch(err => {
            res.write(responseObj(null, err))
        })
        .finally(() => res.end());
}


module.exports = router;
