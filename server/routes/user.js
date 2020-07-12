const express = require('express')
const router = express.Router()
const userController = require('../controller/userController')

router.get('/', async(request, response) => {
    try {
        const result = await userController.findAll()
        response.status(200).json(result)
    } catch (error) {
        response.status(500).json(error.message)
    }
})

router.get('/:userId', async(request, response) => {
    try {
        const result = await userController.findOne(request) 
        response.status(200).json({
            success: true,
            result
        })
    } catch (error) {
        response.status(500).json(error.message)
    }
})

router.post('/', async(request, response) => {
    try {
        const result = await userController.join(request)
        response.status(200).json({
            success: true,
            result
        })
    } catch (error) {
        response.status(500).json(error.message)
    }
})

router.post('/login', async(request, response) => {
    try {
        const result = await userController.login(request)
        if(result === false) {
            response.json({ loginSuccess: false, message: "Login Failed !!!" })
        } else {
            response.cookie("w_authExp", result.jwt.tokenExp)
            response.cookie('x_auth', result.jwt.token)
                .status(200)
                .json({ loginSuccess: true, userId: result.userInfo[0].userId })
        }
    } catch (error) {
        response.status(500).json(error.message)
    }
})

module.exports = router