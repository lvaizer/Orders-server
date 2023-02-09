const prod = {
    DB: {
        host: 'dpg-cfdrv1o2i3mmlo43u1hg-a',
        password: 'ESIivy1zESBfp8oPmMMkVytKMRfSMAvg',
        port: '5432',
        user: 'app',
        database: 'orders_db_lyyc',
        ssl: false
    }
};

const dev = {
    DB: {
        host: 'localhost',
        password: 'LIRONv@1zer',
        port: '5432',
        user: 'postgres',
        database: 'postgres',
        ssl: false
    }
};

const stage = {
    DB: {
        host: 'dpg-cfdrv1o2i3mmlo43u1hg-a.oregon-postgres.render.com',
        password: 'ESIivy1zESBfp8oPmMMkVytKMRfSMAvg',
        port: '5432',
        user: 'app',
        database: 'orders_db_lyyc',
        ssl: false
    }
};

module.exports = (process.env.NODE_ENV === 'dev' ? dev : process.env.NODE_ENV === 'stage' ? stage : prod);
