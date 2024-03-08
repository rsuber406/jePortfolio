import React from "react"
import "../index.css"
import Transition from "./Transition"
import SceneTemplate from "./SceneTemplate"



export default function Home(){

const [viewModel, setViewModel] = React.useState(false)
const [selectedModel, setSelectedModel] = React.useState({
    filePath: "",
    modelName: ""
})

const scenes = [{
    title: "First Scene",
    short: "My First Scene",
    description: "This is a scene of some real estate",
    img: ""
},
{
    title: "First Scene",
    short: "My First Scene",
    description: "This is a scene of some real estate",
    img: ""
},{
    title: "First Scene",
    short: "My First Scene",
    description: "This is a scene of some real estate",
    img: ""
},{
    title: "First Scene",
    short: "My First Scene",
    description: "This is a scene of some real estate",
    img: ""
}]



    const windowWidth = window.innerWidth

    const customHeight = windowWidth * 0.20

    const heightSytle={
        height:customHeight
    }

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

    const displayScene = scenes.map(scene => <SceneTemplate title={scene.title} img={scene.img} shortDescription={scene.short} />)
    


    return(
        <>
        <div className="homeBody">
            
            
            <div style={heightSytle} className="myJob">
                 <div className="firstBody" >
                     <div style={{marginLeft:"10%"}}>
                     <h1 style={{fontSize:"65px", color:"white"}}>Hello, I am <span style={{color:"red"}}>Je!</span></h1>
                     <h2 style={{fontSize:"35px", color:"white"}}>I create 3d models and scenes for films</h2>
                     </div>
                </div>
                <div>
                    {/* Insert photos from scenes that will change after five seconds */}
                </div>
            </div>
         
            <div style={ heightSytle} className="showModels">
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