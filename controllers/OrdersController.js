const Order = require('../models/Order');
const Orders = require('../collections/Orders');

module.exports = new function OrdersController() {

    this.getAllOrders = () => Orders.getAllOrders();

    this.getOrdersByDate = params => new Promise((resolve, reject) => {
        if (!params.year || !params.month || !params.day) {
            reject(403);
            return;
        }
        console.log(params)
        Orders.getOrdersByDate(params)
            .then(data => resolve(data))
            .catch(e => reject(e));
    });

    this.getOrdersDates = () => new Promise((resolve, reject) => {
        Orders.getAllOrdersDates()
            .then(dates => resolve(sortDates(dates)))
            .catch(e => reject(e));
    });

    this.createNewOrder = (req) => new Promise((resolve, reject) => {
        if (!req.body) {
            reject(401);
            return;
        }
        Order.createNewOrder(req.body)
            .then(data => resolve("success"))
            .catch(e => reject(e));
    });

    this.updateOrder = (req) => new Promise((resolve, reject) => {
        if (!req.body) {
            reject(401);
            return;
        }
        Order.updateOrder(req.body)
            .then(data => resolve("success"))
            .catch(e => reject(e));
    });

    this.deleteOrder = (req) => new Promise((resolve, reject) => {
        if (!req.body) {
            reject(401);
            return;
        }
        Order.deleteOrder(req.body)
            .then(data => resolve("success"))
            .catch(e => reject(e));
    });

    function sortDates(data) {
        const dates = {};
        if (!data) return dates;
        data.forEach(dateItem => {
            const date = new Date(dateItem.date)
            const year = date.getFullYear().toString();
            const month = (date.getMonth() + 1).toString();
            const day = date.getDate().toString();
            const monthName = date.toLocaleString('default', {month: 'long'});
            const dayName = date.toLocaleString('default', {weekday: 'long'});
            if (!dates[year]) {
                dates[year] = {[month]: {name: monthName, days: {[day]: {name: dayName}}}};
            } else {
                if (!dates[year][month]) {
                    dates[year][month] = {name: monthName, days: {[day]: {name: dayName}}};
                } else {
                    if (!dates[year][month].days[day]) dates[year][month].days[day] = {name: dayName};
                }
            }
        });
        return dates;
    }
}

