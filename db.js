import mysql from 'mysql2/promise.js'

const pool = mysql.createPoolCluster({
    host: "localhost",
    user: "admin",
    password: "admin123",
    database: "librarydb"
})

export default pool;