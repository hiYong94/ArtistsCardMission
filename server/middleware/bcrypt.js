const bcrypt = require('bcrypt')
const saltRounds = 10

exports.bcryptPassword = async(user, next) => {
    try {
        const hashPassword = await bcrypt.hash(password, saltRounds)
        return hashPassword
    } catch (error) {
        throw error
    }
}