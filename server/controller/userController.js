const userService = require('../service/userService')

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
        const result = await userService.findOne(request)
        return result
    } catch (error) {
        throw error
    }
}