import React from "react"
import "../index.css"
import Transition from "./Transition"
import SceneGen from "./SceneGen"
import RenderItem from "./RenderItem"
import ModelTemplate from "./ModelTemplate"

export default function Home(){

const [viewModel, setViewModel] = React.useState(false)
const [selectedModel, setSelectedModel] = React.useState({
    filePath: "",
    modelName: ""
})

const theseModels = [{
    img: "https://images.unsplash.com/photo-1559645353-c35758ab9015?q=80&w=3864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "this name",
    description: "this description",
    filePath: "/assets/3dModels/scene.gltf"
},
{
    img: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "this name",
    description: "this description",
    filePath: "/assets/3dModels/scene.gltf"
},
{
    img: "https://images.unsplash.com/photo-1634848577969-bc28ee71ffc1?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "this name",
    description: "this description",
    filePath: "/assets/3dModels/scene.gltf"
},
{
    img: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?q=80&w=3764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "this name",
    description: "this description",
    filePath: "/assets/3dModels/scene.gltf"
},

]

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



    const renderModels = theseModels.map((model) =>{
        return(
            <ModelTemplate selectedModel={changeView} img={model.img} name={model.name} description={model.description} path={model.filePath} />
        )
    })

    return(
        <>
        <div className="homeBody">
            
            <Transition color1={"white"} color2={"white"} />
            <div style={heightSytle} className="myJob">
                 <div className="firstBody" >
                     <div style={{marginLeft:"10%"}}>
                     <h1 style={{fontSize:"65px"}}>Hello, I am <span style={{color:"red"}}>Je!</span></h1>
                     <h2 style={{fontSize:"35px"}}>I create 3d models and scenes for films</h2>
                     </div>
                </div>
               { windowWidth >1000 && <div className="eventViewer">
                    <SceneGen >
                        <RenderItem path={"/assets/3dModels/filmReel/scene.gltf"} rotateObject={viewModel} />
                    </SceneGen>
                    {!viewModel ? <div style={{position: "relative", top: "50%", right: "5%", border: "solid black 3px", height:"15%", borderRadius:"20px"}}>
                        <h1>Please select a model to view from below</h1>
                        </div> :
                        <div style={{border: "solid black 3px", width: "50%"}}>
                            <h1 >{selectedModel.modelName} </h1>
                            <SceneGen eventViewer={true}>
                                <RenderItem path={"/assets/3dModels/filmCan/scene.gltf"} rotateObject={false} />
                            </SceneGen>
                        </div>
                        }
                 </div>}
            </div>
            <Transition margin={"15%"} color1={"white"} color2={"#913047 "} />
            <div style={theseModels ? {}: heightSytle} className="showModels">
              <div className="myModels">
              <h1 style={{color: "white"}}>My 3d Models</h1>
              </div>
              <div className="renderModels">
                    {renderModels}
              </div>
            </div>
            <div>

            </div>
        </div>
        </>
    )
}