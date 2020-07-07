const userDao = require('../dao/userDao')

exports.findAll = async() => {
    try {
        const result = await userDao.selectAll()
        return result
    } catch (error) {
        throw error
    }
}

exports.findOne = async(request) => {
    try {
        const result = await userDao.selectByUserId(request)
        return result
    } catch (error) {
        throw error
    }
}

exports.join = async(request) => {
    try {
        const result = await userDao.insertUser(request)
        return result
    } catch (error) {
        throw error
    }
}