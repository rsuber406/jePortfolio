import React from "react"


export default function Transition(props){

    const {color1, color2, margin} = props
    
    const divGradient = {
        background: `linear-gradient(${color1} , ${color2})`,
        height:"100px",
        marginTop: margin? margin : "5%"
    }
console.log(divGradient.background)
    return(
        <div style={divGradient}></div>
    )
}