const jsonwebtoken = require('jsonwebtoken')
const moment = require("moment")
const userDao = require("../dao/userDao")

exports.generateToken = async(userInfo) => { 
    try {
        const token = jsonwebtoken.sign(userInfo[0].id, 'secretToken')
        const oneHour = moment().add(1, 'hour').valueOf()

        const userObject = {
            "token": token,
            "tokenExp": oneHour,
            "userId": userInfo[0].userId
        }
        
        const result = await userDao.insertJsonwebtoken(userObject)
        if(result.affectedRows < 1) {
            return false
        }

        return userObject
    } catch (error) {
        throw error
    }
}