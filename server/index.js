const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())

app.use('/api/user', require('./routes/user'))

app.get('/', () => console.log("Hello World!"))
app.listen(port, () => console.log(`Music application listening Port : ${port}`))