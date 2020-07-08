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
        const result = await userController.findOne(request) 
        response.status(200).json(result)
    } catch (error) {
        response.status(500).json(error.message)
    }
})

// 회원가입
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

// 로그인
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