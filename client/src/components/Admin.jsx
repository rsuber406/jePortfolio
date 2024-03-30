import React from "react"
import { ApiContext } from "../ApiContext"
import "../index.css"
export default function Admin(props){

const {user, handleState, updatePhoto, handleFile, handleVideo, addVideo} = React.useContext(ApiContext)



// if you want to upload files you need to declare that in the form headers to allow encType="multipart/form-data"



function filterEmbed(event){
    const {name, value} = event.target 
    const split = value.split(" ")
   const embeddedString = []
    const removed = split[3].split("")
    console.log(removed)
    for(let i = 0; i < removed.length; i++){
        if(i > 4 && i < removed.length - 1){
            embeddedString.push(removed[i])
        }
    }
    const final = embeddedString.join("")
    console.log(final)
    
    handleVideo(final)
}


return(<>
<div className="admin">
    <div>
        <h1 style={{color:"white"}}>Welcome {user.user.username}</h1>
    </div>

    <div className="videoFormCont">
        <h2>If you would like to add a video please fill out the form below.</h2>
        <form className="uploadVideo" onSubmit={addVideo}>
            <textarea name="src" placeholder="embedded youtube code" onChange={(event)=> filterEmbed(event)} />
            <button className="photoSubmit">Submit</button>
        </form>
    </div>
    <div className="uploadPhotoContainer">
        <h2>If you would like to change your picture, please fill out the form below.</h2>
        <form className="uploadPhoto" onSubmit={updatePhoto} encType="multipart/form-data">
            <h2>Only accepts PNG files</h2>
            <input type="file" name="photo" onChange={handleFile} />
            <button className="photoSubmit">Submit</button>
        </form>
    </div>
</div>

</>)


}