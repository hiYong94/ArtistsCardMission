const userService = require('../service/userService')
const bcrypt = require('../middleware/bcrypt')
const jsonwebtoken = require('../middleware/jsonwebtoken')

exports.findAll = async() => {
    try {
        const result = await userService.findAll()
        return result
    } catch (error) {
        throw error
    }
}

exports.findOne = async(request) => {
    try {
        let userId = request.params.userId
        const result = await userService.findOne(userId)
        return result
    } catch (error) {
        throw error
    }
}

exports.join = async(request) => {
    try {
        let userObject = {
            id, password, email
        } = request.body

        const bcryptPassword = await bcrypt.bcryptPassword(userObject)
        userObject.password = bcryptPassword
        const result = await userService.join(userObject)
        return result
    } catch (error) {
        throw error
    }
}

exports.login = async(request) => {
    try {
        let userObject = {
            id, password
        } = request.body
        
        const userInfo = await userService.loginIdCheck(id)
        if(userInfo.length === 0) {
            return false
        }
        const comparePassword = await bcrypt.bcryptPasswordCompare(userObject)
        if(comparePassword === false) {
            return false
        }
        
        const jwt = await jsonwebtoken.generateToken(userInfo)
        if(jwt === false) {
            return false
        }

        const resultObject = {
            jwt: jwt,
            userInfo: userInfo
        }
        
        return resultObject
    } catch (error) {
        throw error
    }
}