const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type:String,
        required: true,
       
    },
    password: {
        type:String,
        required:true
    },
    email:{
        type: String,
        default: ""
    },
    pin: {
        type:Number,
        default: 0
    }
})



userSchema.pre("save", function(next){
    const user = this
    if(!user.isModified('password')){return next}
    else bcrypt.hash(user.password, 10, (err, hash)=>{
        if(err){
            return next(err)
        }
        user.password = hash
        next()
    })
})

userSchema.methods.checkPassword = function(passwordAttempt, callback){
    console.log('checkPass fired')
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch)=>{
        if(err){
            return callback(err)
        }
        return callback(null, isMatch)
    })
}

userSchema.methods.withoutPassword = function(){
   
    const user = this.toObject()
    delete user.password
   delete user.pin
    return user
}

module.exports = mongoose.model('JeUser', userSchema)