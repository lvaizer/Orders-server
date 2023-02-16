const repo = require('../db/repositories/OrdersRepo');

module.exports = new function Order() {
    this.createNewOrder = (data) => new Promise(((resolve, reject) => {
        repo.insertNewOrder(data).then(res => resolve(res)).catch(err => reject(err))
    }));

    this.updateOrder = (data) => new Promise(((resolve, reject) => {
        repo.updateOrder(data).then(res => resolve(res)).catch(err => reject(err))
    }))

    this.deleteOrder = (data) => new Promise(((resolve, reject) => {
        repo.deleteOrder(data).then(res => resolve(res)).catch(err => reject(err))
    }))
}
