const repo = require('../db/repositories/OrdersRepo');

module.exports = new function Orders() {
    this.getAllOrders = () => repo.getAllOrders();

    this.getOrders = (props) => repo.getOrders(props);
}
