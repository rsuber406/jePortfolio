const express = require('express')
const nodemailer = require('nodemailer')
const mailRouter = express.Router()

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




module.exports = mailRouter