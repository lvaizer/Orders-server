const {Pool} = require('pg')

module.exports = new function DB_connection() {
    const pool = new Pool({
        host: CONFIG.DB.host,
        password: CONFIG.DB.password,
        port: CONFIG.DB.port,
        user: CONFIG.DB.user,
        database: CONFIG.DB.database,
        max: 20,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000,
        ssl: CONFIG.DB.ssl
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

