const fs = require('fs');

const connection = require('./db_connection');

const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();
const runDbBuild = cb => connection.query(sql,cb);

runDbBuild();

module.exports = runDbBuild;
