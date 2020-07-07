const pool = require('../config/mysql2')

let User = function(user) { }

User.selectAll = async() => {
    let connection
    try {
        connection = await pool.getConnection()
        const sqlQuery = `SELECT userId, id, password, email FROM user`
        const data = await connection.query(sqlQuery)
        return data[0]
    } catch (error) {
        throw error
    } finally {
        connection.release()
    }
}

User.selectByUserId = async(request) => {
    let connection
    try {
        connection = await pool.getConnection()
        const sqlQuery = `SELECT userId, id, password, email FROM user WHERE userId = ?`
        const data = await connection.query(sqlQuery, request)
        return data[0]
    } catch (error) {
        throw error
    } finally {
        connection.release()
    }
}

User.insertUser = async(request) => {
    let connection
    try {
        connection = await pool.getConnection()
        const sqlQuery = `INSERT INTO user(id, password, email) VALUES (?, ?, ?)`
        const data = await connection.query(sqlQuery, [request.id, request.password, request.email])
        return data[0]
    } catch (error) {
        throw error
    } finally {
        connection.release()
    }
}

User.selectByLogin = async(request) => {
    let connection
    try {
        connection = await pool.getConnection()
        const sqlQuery = `SELECT userId, id, password FROM user WHERE id = ? && password = ?`
        const data = await connection.query(sqlQuery, [request.id, request.password])
        return data[0]
    } catch (error) {
        throw error
    } finally {
        connection.release()
    }
}

User.insertJsonwebtoken = async(request) => {
    let connection
    try {
        connection = await pool.getConnection()
        const sqlQuery = `UPDATE user SET token=?, tokenExp=? WHERE userId=?`
        const data = await connection.query(sqlQuery, [request.token, request.tokenExp, request.userId])
        return data[0]
    } catch (error) {
        throw error
    } finally {
        connection.release()
    }
}

User.selectByLoginId = async(request) => {
    let connection
    try {
        connection = await pool.getConnection()
        const sqlQuery = `SELECT userId, id, password FROM user WHERE id = ?`
        const data = await connection.query(sqlQuery, request)
        return data[0]
    } catch (error) {
        throw error
    } finally {
        connection.release()
    }
}

module.exports = User