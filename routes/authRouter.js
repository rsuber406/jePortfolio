const express = require('express')
const jwt = require('jsonwebtoken')
const User = require('../models/user.js')

const authRouter = express.Router()


authRouter.post("/8173/signup", async(req,res)=>{
    try {
        const foundOne = User.findOne({username: req.body.username})
        
        if(foundOne.username){
            res.status(403).send("forbidden username")
        }

        if(!foundOne.username){
            const newUser = new User(req.body)
            await newUser.save()
            const token = jwt.sign(newUser.withoutPassword(), process.env.SECRET)
            res.status(200).send({token, user:newUser.withoutPassword()})
            
        }
    } catch (err) {
        res.status(500)
        res.json({message: "Issue in signup"})
    }
})

authRouter.post('/login', async(req,res)=>{
    try {
        const foundOne = await User.findOne({username: req.body.username})
        if(foundOne){
            foundOne.checkPassword(req.body.password, (err,isMatch)=>{
                if(err){
                    console.log(err)
                    res.status(500).send("issue with route")
                }
                if(!isMatch){
                    res.status(403).send("username or password is incorrect")
                }
                if(isMatch){
                    const token = jwt.sign(foundOne.withoutPassword(), process.env.SECRET)
                    res.status(200).send({token, user:foundOne.withoutPassword()})
                }
            })
        }
        else res.status(403).send("username or password is incorrect")
    } catch (err) {
        console.log(err)
        res.status(500)
        res.json({message:"Error with the route"})
    }
})

module.exports = authRouter