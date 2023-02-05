const Order = require('../models/Order');
const Orders = require('../collections/Orders');

module.exports = OrdersController = () => {
    this.getAllOrders = () => Orders.getAllOrders();

}
