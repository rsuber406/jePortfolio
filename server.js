const express = require('express')

const mongoose = require('mongoose')

const morgan = require('morgan')

const{ expressjwt} = require('express-jwt')

require('dotenv').config()

const server = express()

server.use(morgan('dev'))

server.use(express.json())

server.use("/api/auth", expressjwt({secret:process.env.SECRET, algorithms:['HS256']}))

server.use('/api', require('./routes/authRouter.js'))

server.use("/api", require('./routes/videoRouter.js'))


server.listen(8173, console.log('server is listening'))