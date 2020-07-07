const userService = require('../service/userService')
const bcrypt = require('../middleware/bcrypt')

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