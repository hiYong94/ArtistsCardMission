const userDao = require('../dao/userDao')
const bcrypt = require('bcrypt')
const saltRounds = 10

exports.bcryptPassword = async(user) => {
    try {
        // const hashPassword = await bcrypt.hash(user.password, saltRounds)
        const hashPassword = await new Promise((resolve, reject) => {
            bcrypt.hash(user.password, saltRounds, function(error, hash) {
                if(error) {
                    reject(error)
                }
                resolve(hash)
            })
        })
        return hashPassword
    } catch (error) {
        throw error
    }
}

exports.bcryptPasswordCompare = async(user) => {
    try {
        const userObject = await userDao.selectByLoginId(user.id)
        // const comparePasswordResult = await bcrypt.compare(user.password, userObject[0].password)
        const comparePasswordResult = await new Promise((resolve, reject) => {
            bcrypt.compare(user.password, userObject[0].password, function(error, result) {
                if(error) {
                    reject(error)
                }
                resolve(result)
            })
        })
        return comparePasswordResult
    } catch (error) {
        throw error
    }
}