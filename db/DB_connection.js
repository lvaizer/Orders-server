const {Pool} = require('pg')

module.exports = new function DB_connection() {
    const pool = new Pool({
        host: process.env.DB_HOST,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        database: process.env.DB_DATABASE,
        max: 20,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000,
        ssl: process.env.DB_SSL
    })
    this.query = (query) => new Promise((resolve, reject) => {
        pool.connect()
            .then(client => {

                client.query(query)
                    .then(res => resolve(res.rows))
                    .catch(err => {
                        console.log(err)
                        reject(err.message)
                    })
                    .finally(() => client.release())
            })
            .catch(err => reject(err));
    });
}

