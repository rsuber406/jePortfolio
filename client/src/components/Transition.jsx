import React from "react"


export default function Transition(props){

    const {color1, color2} = props
    
    const divGradient = {
        background: `linear-gradient(${color1} , ${color2})`,
        height:"100px",
        marginTop: "5%"
    }
console.log(divGradient.background)
    return(
        <div style={divGradient}></div>
    )
}