const pool = require('../config/mysql2')

let Music = function(music) { }

Music.selectAll = async() => {
    let connection
    try {
        connection = await pool.getConnection()
        const sqlQuery = `SELECT musicId, userId, albumName, trackName, artistName, fileName FROM music`
        const data = await connection.query(sqlQuery)
        return data[0]
    } catch (error) {
        throw error
    } finally {
        connection.release()
    }
}

Music.selectByMusicId = async(request) => {
    let connection
    try {
        connection = await pool.getConnection()
        const sqlQuery = `SELECT musicId, userId, albumName, trackName, artistName, fileName FROM music WHERE musicId = ?`
        const data = await connection.query(sqlQuery, request)
        return data[0]
    } catch (error) {
        throw error
    } finally {
        connection.release()
    }
}

Music.insertMusic = async(request) => {
    let connection
    try {
        connection = await pool.getConnection()
        const sqlQuery = `INSERT INTO music(userId, albumName, trackName, artistName, originalName, fileName, soundSourceFilePath) VALUES (?, ?, ?, ?, ?, ?, ?)`
        const data = await connection.query(sqlQuery, [request.userId, request.albumName, request.trackName, request.artistName, request.originalname, request.filename, request.path])
        return data[0]
    } catch (error) {
        throw error
    } finally {
        connection.release()
    }
}

Music.selectByTrackName = async(request) => {
    let connection
    try {
        connection = await pool.getConnection()
        const sqlQuery = `SELECT musicId, userId, albumName, trackName, artistName, soundSourceFilePath FROM music WHERE trackName LIKE ?`
        const data = await connection.query(sqlQuery, '%' + request + '%')
        return data[0]
    } catch (error) {
        throw error
    } finally {
        connection.release()
    }
}

Music.updateMusic = async(request) => {
    let connection
    try {
        connection = await pool.getConnection()
        const sqlQuery = `UPDATE music ` + 
                        `SET albumName = ?, trackName = ?, artistName = ?, soundSourceFilePath = ? ` +
                        `WHERE musicId = ?`
        const data = await connection.query(sqlQuery, [request.albumName, request.trackName, request.artistName, request.soundSourceFilePath, request.musicId])
        return data[0]
    } catch (error) {
        throw error
    } finally {
        connection.release()
    }
}

module.exports = Music