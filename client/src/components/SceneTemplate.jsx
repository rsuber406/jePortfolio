import React from "react"
import "../index.css"


export default function SceneTemplate(props){
    const {title, img, shortDescription, id} = props





   return(
    <>
    <div className="sceneTemplate">
      <img src={img}></img>
      <h1>{title} </h1>
      <h2>{shortDescription} </h2>
    </div>
    </>
   ) 
}