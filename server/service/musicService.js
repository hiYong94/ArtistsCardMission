const musicDao = require('../dao/musicDao')

exports.findAll = async() => {
    try {
        const result = await musicDao.selectAll()
        return result
    } catch (error) {
        throw error
    }
}

exports.findOne = async(request) => {
    try {
        const result = await musicDao.selectByMusicId(request)
        return result
    } catch (error) {
        throw error
    }
}

exports.addMusic = async(request) => {
    try {
        const result = await musicDao.insertMusic(request)
        return result
    } catch (error) {
        throw error
    }
}

exports.searchByTrackName = async(request) => {
    try {
        const result = await musicDao.selectByTrackName(request)
        return result
    } catch (error) {
        throw error
    }
}

exports.modifiedMusic = async(request) => {
    try {
        const result = await musicDao.updateMusic(request)
        return result
    } catch (error) {
        throw error
    }
}