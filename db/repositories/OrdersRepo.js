const DB_Connection = require('../DB_connection');

module.exports.getAllOrders = () => {
    const query = 'SELECT * FROM "orders" WHERE "archive" = false';
    return DB_Connection.query(query);
};

module.exports.getOrders = ({year, month, day}) => {
    let query = 'SELECT * FROM "orders" WHERE date_part(\'year\',"date") = ' + year;
    if (month) query = query.concat(' AND date_part(\'month\',"date") = ' + month);
    if (day) query = query.concat(' AND date_part(\'day\',"date") = ' + day);
    query = query.concat(' AND "archive" = false');
    return DB_Connection.query(query);
};
