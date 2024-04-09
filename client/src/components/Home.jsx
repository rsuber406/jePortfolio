import React from "react"
import "../index.css"
import Transition from "./Transition"
import SceneTemplate from "./SceneTemplate"
import { ApiContext } from "../ApiContext"


export default function Home(){
const {createdVideo} = React.useContext(ApiContext)
const [viewModel, setViewModel] = React.useState(false)
const [selectedModel, setSelectedModel] = React.useState({
    filePath: "",
    modelName: ""
})

// This will be how we write the backend for the addition of a video. It needs to be a string and then split into an array
const stringTest = `<iframe width="560" height="315" src="https://www.youtube.com/embed/lkxLFMQNMVo?si=DLJHZqE401fgsyhC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
const splitTest = stringTest.split(" ")
console.log(splitTest)



    const windowWidth = window.innerWidth

    const customHeight = windowWidth * 0.20

  

    function changeView(path){
        console.log(path)
        setViewModel(prevState => !prevState)
        setSelectedModel(prevState => {
            return{
                ...prevState,
                filePath: path
            }
        })
    }

    const displayScene = createdVideo.map(scene => <SceneTemplate title={scene.title}  shortDescription={scene.short} link={scene.src} />)
    


    return(
        <>
        <div  className="homeBody">
            
            
            <div  className="myJob">
                 <div className="firstBody" >
                     <div style={{marginLeft:"10%"}}>
                     <h1 style={{fontSize:"65px", color:"white"}}>Hello, I am <span style={{color:"red"}}>Je!</span></h1>
                     <h2 style={{fontSize:"35px", color:"white"}}>I capture scenes and edit them to create films</h2>
                     </div>
                </div>
                <div className="event">

                     <div className="eventViewer">
                        <img width={"100%"} height={window.innerHeight / 3} className="myImg" src="/assets/photos/myPhoto.png" />
                     </div>
                
                </div>
            </div>
         
            <div  className="showModels">
              <div className="myModels">
              <h1  style={{color: "red"}}>My Scenes</h1>
              </div>
                <div style={{display:"flex", justifyContent: "space-evenly", width:"100%"}}>
                {displayScene}
                </div>
            </div>
            <div>

            </div>
        </div>
        </>
    )
}