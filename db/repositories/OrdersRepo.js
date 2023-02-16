const DB_Connection = require('../DB_connection');
const format = require('pg-format');

module.exports = new function OrdersRepo() {

    this.getAllOrders = () => {
        const query = 'SELECT * FROM "orders" WHERE "archive" = false';
        return DB_Connection.query(query);
    };

    this.getOrdersByDate = ({year, month, day}) => {
        let query = 'SELECT * FROM "orders" WHERE date_part(\'year\',"date") = ' + year;
        if (month) query = query.concat(' AND date_part(\'month\',"date") = ' + month);
        if (day) query = query.concat(' AND date_part(\'day\',"date") = ' + day);
        query = query.concat(' AND "archive" = false ORDER BY id');
        return DB_Connection.query(query);
    };

    this.getAllOrdersDates = () => {
        const query = 'SELECT "date" FROM "orders" WHERE "archive" = false';
        return DB_Connection.query(query);
    }

    this.insertNewOrder = (data) => {
        let query = 'INSERT INTO orders ' +
            '(date, first_name, last_name, phone, email, price';
        if (data.notes && data.notes.trim().length > 0) {
            query = query.concat(', "notes") ');
        } else {
            query = query.concat(') ')
        }
        query = query.concat('VALUES ' +
            "('" + data.date + "', '" + data.first_name + "', '" + data.last_name + "', '" + data.phone + "', '" + data.email + "', '" + data.price + "'");
        if (data.notes && data.notes.trim().length > 0) {
            query = query.concat(", '" + data.notes + "')")
        } else {
            query = query.concat(')')
        }
        return DB_Connection.query(query);
    }

    this.updateOrder = data => {
        const queryValues = [];
        let querySet = '';
        let queryWhere = '';
        Object.entries(data).forEach(([key, value], index) => {
            if (key === 'id') {
                queryWhere = ` WHERE ${key} = ${value}`;
            } else if (value !== undefined) {
                const separator = index === 1 ? '' : ', ';
                querySet += `${separator}${key} = %L`;
                queryValues.push(value);
            }
        });
        const query = format(`UPDATE orders SET ${querySet} ${queryWhere}`, ...queryValues);
        return DB_Connection.query(query);
    }

    this.deleteOrder = data => {
        const query = 'UPDATE orders SET archive = true WHERE id =' + data.id;
        return DB_Connection.query(query);
    }
}


