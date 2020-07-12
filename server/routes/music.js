const express = require('express')
const router = express.Router()
const musicController = require('../controller/musicController')
const multer = require('multer')
const path = require('path')

let storage = multer.diskStorage({
    destination: function (request, file, callback) {
        callback(null, 'server/public/uploads')
    },
    filename: function (request, file, callback) {
        let decodeOriginalName = decodeURI(file.originalname)
        let extension = path.extname(file.originalname)
        let basename = path.basename(decodeOriginalName, extension)
        callback(null, basename + '-' + Date.now() + '-' + extension)
    }    
})

let fileFilter = function(request, file, callback) {
    var extension = path.extname(file.originalname).toLocaleLowerCase()
    if(extension !== '.mp3' && extension !== '.m4a' && extension !== '.mp4') {   
        return callback(new Error('Only [.mp3 / .m4a / .mp4] are allowed'))
    }
    callback(null, true)
}

let upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        files: 1,
        fileSize: 1024 * 1024 * 1024
    }
}).single('soundSourceFilePath')

router.get('/', async(request, response) => {
    try {
        const result = await musicController.findAll()
        response.status(200).json({
            success: true,
            result
        })
    } catch (error) {
        response.status(500).json(error.message)
    }
})

router.get('/:musicId', async(request, response) => {
    try {
        const result = await musicController.findOne(request) 
        response.status(200).json({
            success: true,
            result
        })
    } catch (error) {
        response.status(500).json(error.message)
    }
})

router.post('/', upload, async(request, response) => {
    try {
        const result = await musicController.addMusic(request)
        response.status(200).json({
            success: true,
            result
        })
    } catch (error) {
        response.status(500).json(error.message)
    }
})

router.get('/search/:trackName', async(request, response) => {
    try {
        const result = await musicController.searchByTrackName(request)
        response.status(200).json({
            success: true,
            result
        })
    } catch (error) {
        response.status(500).json(error.message)
    }
})

router.put('/:musicId', async(request, response) => {
    try {
        const result = await musicController.modifiedMusic(request)
        response.status(200).json({
            success: true,
            result
        })
    } catch (error) {
        response.status(500).json(error.message)
    }
})

module.exports = router