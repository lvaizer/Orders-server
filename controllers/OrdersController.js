const Order = require('../models/Order');
const Orders = require('../collections/Orders');

module.exports = new function OrdersController() {

    this.getAllOrders = () => Orders.getAllOrders();

    this.getOrdersByDate = params => Orders.getOrdersByDate(params);

    this.getOrdersDates = () => new Promise((resolve, reject) => {
        Orders.getAllOrdersDates()
            .then(dates => resolve(sortDates(dates)))
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
                dates[year] = {[month]: {name: monthName, days: {[day]: {name:dayName}}}};
            } else {
                if (!dates[year][month]) {
                    dates[year][month] = {name: monthName, days: {[day]: {name:dayName}}};
                } else {
                    if (!dates[year][month].days[day]) dates[year][month].days[day] = {name:dayName};
                }
            }
        });
        return dates;
    }
}

