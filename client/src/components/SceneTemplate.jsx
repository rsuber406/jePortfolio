import React from "react"
import "../index.css"


export default function SceneTemplate(props){
    const {title, img, shortDescription, id} = props


    
    
    return(
      <>
    <div className="sceneTemplate">
    
      <iframe width="100%" height={window.innerHeight / 5} src="https://www.youtube.com/embed/lkxLFMQNMVo?list=WL" title="Cinematic Boxing Commercial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <h1>{title} </h1>
      <h2>{shortDescription} </h2>
    </div>
    </>
   ) 
}