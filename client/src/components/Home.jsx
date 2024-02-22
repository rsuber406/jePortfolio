import React from "react"
import "../index.css"
import Transition from "./Transition"

export default function Home(){

const [viewModel, setViewModel] = React.useState(false)
const [selectedModel, setSelectedModel] = React.useState({
    filePath: "",
    modelName: ""
})



    const windowWidth = window.innerWidth

    const customHeight = windowWidth * 0.20

    const heightSytle={
        height:customHeight
    }


    return(
        <>
        <div className="homeBody">
            
            <Transition color1={"white"} color2={"silver"} />
            <div style={heightSytle} className="myJob">
                 <div className="firstBody" >
                     <div style={{marginLeft:"10%"}}>
                     <h1 style={{fontSize:"45px"}}>Hello, I am <span style={{color:"red"}}>Je!</span></h1>
                     <h2 style={{fontSize:"25px"}}>I create 3d models and scenes for films</h2>
                     </div>
        
                </div>
                 <div>
                    <h1></h1>
                 </div>
            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
        </>
    )
}