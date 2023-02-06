const repo = require('../db/repositories/OrdersRepo');

module.exports = new function Orders() {
    this.getAllOrders = () => repo.getAllOrders();

    this.getOrdersByDate = (props) => repo.getOrdersByDate(props);

    this.getAllOrdersDates = ()=>repo.getAllOrdersDates();
}
