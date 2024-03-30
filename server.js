const express = require('express')

const mongoose = require('mongoose')

const morgan = require('morgan')

const{ expressjwt} = require('express-jwt')

require('dotenv').config()

const server = express()

server.use(morgan('dev'))

server.use(express.json())

mongoose.connect(process.env.dbAuth, console.log('connected to db'))

server.use("/api/auth", expressjwt({secret:process.env.SECRET, algorithms:['HS256']}))

server.use('/api', require('./routes/authRouter.js'))

server.use("/api", require('./routes/videoRouter.js'))

server.use("/api", require('./routes/imgRouterPng.js'))

server.use((err, req,res,next)=>{
    res.send({errMsg: err.message})
})

server.listen(8173, console.log('server is listening'))