import React from "react"
import "../index.css"
import { ApiContext } from "../ApiContext"


export default function SignIn(){
    const {handleState, signIn} = React.useContext(ApiContext)
    const style = {
        marginTop: "10px"
    }
    const divStyle ={
        display:"flex",
        flexDirection: "column",
        alignItems: "center",
      
    }

    return(<>
    <div style={divStyle}>
      
        <h1 style={{color:"white"}}>Sign In</h1>
        <form className="signinForm" onSubmit={signIn}>
            <input className="contactForm" type="text" name="username" placeholder="username" onChange={(event)=> handleState(event, "login")} />
            <input style={style} className="contactForm" type="password" name="password" placeholder="password" onChange={(event)=> handleState(event, "login")} />
            <button className="contactSubmit">Submit</button>
        </form>

     
    </div>
    </>)
}