const prod = {
    DB: {
        host: 'dpg-cfdrv1o2i3mmlo43u1hg-a.oregon-postgres.render.com',
        password: 'ESIivy1zESBfp8oPmMMkVytKMRfSMAvg',
        port: '5432',
        user: 'app',
        database: 'orders_db_lyyc'
    }
};
const dev = {
    DB: {
        host: 'dpg-cfdrv1o2i3mmlo43u1hg-a.oregon-postgres.render.com',
        password: 'ESIivy1zESBfp8oPmMMkVytKMRfSMAvg',
        port: '5432',
        user: 'app',
        database: 'orders_db_lyyc'
    }
};
const stage = {
    DB: {
        host: 'dpg-cfdrv1o2i3mmlo43u1hg-a.oregon-postgres.render.com',
        password: 'ESIivy1zESBfp8oPmMMkVytKMRfSMAvg',
        port: '5432',
        user: 'app',
        database: 'orders_db_lyyc'
    }
};

module.exports = (process.env.NODE_ENV === 'dev' ? dev : process.env.NODE_ENV === 'stage' ? stage : prod);
