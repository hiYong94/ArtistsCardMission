const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

// 회원 전체조회
router.get('/', async(request, response) => {
    try {
        const result = await userController.findAll()
        response.status(200).json(result)
    } catch (error) {
        response.status(500).json(error.message)
    }
})

// 회원 한명조회
router.get('/:userId', async(request, response) => {
    try {
        let userId = request.params.userId 
        const result = await userController.findOne(userId) 
        response.status(200).json(result)
    } catch (error) {
        response.status(500).json(error.message)
    }
})

// 회원가입
router.post('/', async (request, response) => {

})

module.exports = router