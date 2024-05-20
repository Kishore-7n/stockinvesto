
require("dotenv").config()
const {Client} = require("pg")

const client = new Client({
    user:process.env.STOCK_USER,
    host:process.env.STOCK_HOST,
    database:process.env.STOCK_DATABASE,
    password:process.env.STOCK_PASSWORD,
    port:5432,
});

module.exports = client
