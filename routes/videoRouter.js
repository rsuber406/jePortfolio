const express = require('express')
const Video = require('../models/videos.js')
const videoRouter = express.Router()

videoRouter.get("/allVideos", async(req,res)=>{
    try {
        const allVideos = await Video.find({})
        res.status(200).send(allVideos)
    } catch (err) {
        res.status(500)
        res.json({message: "check get route"})
    }
})

videoRouter.post("/auth/newVideo", async(req,res)=>{
    try {
        const newVideo = new Video(req.body)
        newVideo.save()
        res.status(200).send(newVideo)
    } catch (err) {
        res.status(500)
        res.json({message:"check post route"})
    }
})

videoRouter.put("/auth/updateVideo/:videoId", async(req,res)=>{
    try {
        const updateVideo = await Video.findOneAndUpdate({_id: req.params.videoId}, req.body, {new:true})
        res.status(200).send(updateVideo)
    } catch (err) {
        res.status(404)
        res.json({message:err})
    }
})

videoRouter.delete("/auth/removeVideo/:videoId", async(req,res)=>{
    try {
        await Video.findOneAndDelete({_id:req.params.videoId})
        res.status(200).send("video is removed")
    } catch (err) {
        res.status(404)
        res.json({message:"check delete route"})
    }
})

module.exports = videoRouter