import React from "react"
import "../index.css"
import { ApiContext } from "../ApiContext"


export default function SignIn(){
    const {handleState, signIn, acquirePin, finishReset} = React.useContext(ApiContext)
    const [beginReset, setBeginReset] = React.useState(false)
    const [pinForm, setPinForm] = React.useState(false)
    const [email, setEmail] = React.useState({
        email: ''
    })
    const [insertPin, setInsertPin] = React.useState({
        pin:0,
        password: "",
        email: ""
    })
    const style = {
        marginTop: "10px"
    }
    const divStyle ={
        display:"flex",
        flexDirection: "column",
        alignItems: "center",
      
    }

    function startReset(){
        setBeginReset(prevState => !prevState)
    }

    function handleEmail(event){
        const {name,value} = event.target 
        setEmail(prevState => {
            return{
                ...prevState,
                [name]: value
            }
        })
    }

   async function sendReset(event){
        event.preventDefault()
      const isComplete = await  acquirePin(email)
      if(isComplete){
        setBeginReset(prevState => false)
        setPinForm(prevState => true)
      }
    }

    function handlePin(event){
        const {name,value} = event.target 
        setInsertPin(prevState => {
            return{
                ...prevState,
                [name]: value
            }
        })
    }

   async function sendPin(event){
        event.preventDefault()
        insertPin.email = email.email
        const complete = await finishReset(insertPin)
        if(complete){
            setPinForm(false)

        }

    }




    return(<>
    <div style={divStyle}>
      
        <h1 style={{color:"white"}}>Sign In</h1>
        <form className="signinForm" onSubmit={signIn}>
            <input className="contactForm" type="text" name="username" placeholder="username" onChange={(event)=> handleState(event, "login")} />
            <input style={style} className="contactForm" type="password" name="password" placeholder="password" onChange={(event)=> handleState(event, "login")} />
            <button className="contactSubmit">Submit</button>
        </form>
        <div>
            <h1 className="resetPass" onClick={startReset}>Forgot your password?</h1>
         {beginReset &&   <form className="admin" onSubmit={sendReset}>
                <input type="email" name="email" onChange={handleEmail} placeholder="email"/>
                <button className="resetButton">Reset</button>
            </form>}
        </div>
        <div>
            
         {pinForm &&   <form className="admin" onSubmit={sendPin}>
                <input type="text" name="pin" onChange={handlePin} placeholder="pin"/>
                <input type="password" name="password" placeholder="password" onChange={handlePin}/>
                <button className="resetButton">Change Password</button>
            </form>}
        </div>

     
    </div>
    </>)
}