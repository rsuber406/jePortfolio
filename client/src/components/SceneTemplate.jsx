import React from "react"
import "../index.css"


export default function SceneTemplate(props){
    const {title, img, shortDescription, id, link} = props


    
    
    return(
      <>
    <div className="sceneTemplate">
    <iframe width={"100%"} height={window.innerHeight /4} src="https://www.youtube.com/embed/lkxLFMQNMVo?si=DLJHZqE401fgsyhC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      <h2>{shortDescription} </h2>
    </div>
    </>
   ) 
}