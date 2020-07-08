const express = require('express')
const router = express.Router()
const musicController = require('../controller/musicController')


router.get('/', async(request, response) => {
    try {
        const result = await musicController.findAll()
        response.status(200).json(result)
    } catch (error) {
        response.status(500).json(error.message)
    }
})

router.get('/:musicId', async(request, response) => {
    try {
        const result = await musicController.findOne(request) 
        response.status(200).json(result)
    } catch (error) {
        response.status(500).json(error.message)
    }
})

router.post('/', async(request, response) => {
    try {
        const result = await musicController.addMusic(request)
        response.status(200).json(result)
    } catch (error) {
        response.status(500).json(error.message)
    }
})

router.get('/search/:trackName', async(request, response) => {
    try {
        const result = await musicController.searchByTrackName(request)
        response.status(200).json(result)
    } catch (error) {
        response.status(500).json(error.message)
    }
})

router.put('/:musicId', async(request, response) => {
    try {
        const result = await musicController.modifiedMusic(request)
        response.status(200).json(result)
    } catch (error) {
        response.status(500).json(error.message)
    }
})

module.exports = router