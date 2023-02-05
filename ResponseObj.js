module.exports = function responseObj(data, err) {
    err && console.error(err);
    return JSON.stringify({
            statusCode: (err ? isNaN(err) ? 500 : err : 200),
            status: !err,
            message: err ? err : data
        }
    )
}
