const musicService = require('../service/musicService')

exports.findAll = async() => {
    try {
        const result = await musicService.findAll()
        return result
    } catch (error) {
        throw error
    }
}

exports.findOne = async(request) => {
    try {
        let musicId = request.params.musicId
        const result = await musicService.findOne(musicId)
        return result
    } catch (error) {
        throw error
    }
}

exports.addMusic = async(request) => {
    try {
        let soundSourceFilePath = request.file
        let musicObject = {
            userId, albumName, trackName, artistName
        } = request.body
        const requestObject = Object.assign(musicObject, soundSourceFilePath)
        const result = await musicService.addMusic(requestObject)
        return result
    } catch (error) {
        throw error
    }
}

exports.searchByTrackName = async(request) => {
    try {
        let trackName = request.params.trackName
        const result = await musicService.searchByTrackName(trackName)
        return result
    } catch (error) {
        throw error
    }
}

exports.modifiedMusic = async(request) => {
    try {
        let musicId = request.params.musicId
        let musicObject = {
            albumName, trackName, artistName, soundSourceFilePath
        } = request.body
        musicObject.musicId = musicId
        const result = await musicService.modifiedMusic(musicObject)
        return result
    } catch (error) {
        throw error
    }
}