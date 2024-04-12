const express = require('express')
const nodemailer = require('nodemailer')
const mailRouter = express.Router()
const User = require("../models/user.js")

let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user:process.env.email,
        pass: process.env.password
    }
})

mailRouter.post("/sendMail", async(req,res)=>{
try {
    const {name, email, phone} = req.body

    let mailDetails = {
        from: process.env.email,
        to: process.env.email,
        subject: `New Contact`,
        text: `${name} wants to get in touch with you. Please contact them at ${email} or ${phone}. Thank you and have a wonderful day.`
    }

    mailTransporter.sendMail(mailDetails, function(err,data){
        if(err){
            throw err
        }
        else res.status("Your message was sent.")
    })
    
} catch (err) {
    res.status(500)
    res.json({message: "err in mail router"})
}
})


mailRouter.post("/resetemail" , async(req,res)=>{
try {
   
    const generatePin = []
    const foundOne = await User.findOne({email:req.body.email})
    const numbers = [1,2,3,4,5,6,7,8,9]
    if(foundOne){
       
    for(let i = 0; i < 6 ; i++){
        const myNumber = Math.floor(Math.random() * (numbers.length - 0) + 0)
        generatePin.push(numbers[myNumber])

    }
    let mailDetails = {
        from:process.env.email,
        to: foundOne.email,
        subjet: "Reset password",
        text: `Here is the pin needed to reset your password ${generatePin.join("")}.`
    }

    foundOne.pin = generatePin.join("")
    const newPin = JSON.parse(foundOne.pin)
    await User.findOneAndUpdate({email: foundOne.email}, {pin: newPin }, {new:true})
    mailTransporter.sendMail(mailDetails, function(err,data) {
        console.log(mailDetails.text)
        if(err){
            throw err
        }
        else
        res.status(200).send("Pin has been sent to your email")
    })
}

else res.status(404).send("Did not find anyone with the email provided.")
} catch (err) {
    res.status(500)
    console.log(err)
    res.json({message: "Check the route for generating a pin"})
}
})




module.exports = mailRouter