const express = require('express')

const imgRouter = express.Router()

const multer = require('multer')
// multer will deal with the photos for you so long as you follow the below steps exactly as they are done.

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, "./client/public/assets/photos")
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, "myPhoto.png")
    }
})

const upload = multer({storage: storage})

imgRouter.post("/auth/updateImg", upload.single('photo'), async(req,res) =>{
    try {
        
     
      console.log("something happened")
//`/client/public/assets/photos/myPhoto.${fileType}`
        
       

        res.status(200).send("Photo is updated")
    } catch (err) {
        console.log(err)
        res.status(500)
        res.json({message: "error in photo router"})
    }
})


module.exports = imgRouter