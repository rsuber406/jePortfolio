const express = require('express')

const mongoose = require('mongoose')

const morgan = require('morgan')

const{ expressjwt} = require('express-jwt')

require('dotenv').config()

const path = require('path')
const { appendFile } = require('fs')

const server = express()

server.use(morgan('dev'))

server.use(express.json())

mongoose.connect(process.env.dbAuth, console.log('connected to db'))

server.use("/api/auth", expressjwt({secret:process.env.SECRET, algorithms:['HS256']}))

server.use('/api', require('./routes/authRouter.js'))

server.use("/api", require('./routes/videoRouter.js'))

server.use("/api", require('./routes/imgRouterPng.js'))

server.use("/api", require('./routes/emailer.js'))

server.use(express.static(path.join(__dirname, "client", "dist")))

server.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "client", "dist", "index.html"))
})

server.use((err, req,res,next)=>{
    res.send({errMsg: err.message})
})

server.listen(8173, console.log('server is listening'))