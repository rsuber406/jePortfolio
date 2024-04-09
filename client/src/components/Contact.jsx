import React from 'react'
import "../index.css"
import Transition from './Transition'
import { ApiContext } from '../ApiContext';

export default function Contact(){

    const{handleState, sendEmail} = React.useContext(ApiContext)

    const windowWidth = window.innerWidth;

    const [code, setCode] = React.useState('')

    const [checkCode, setCheckCode] = React.useState("")

    const [err, setErr] = React.useState('')

    const buttonSize = {
        width:"50px",
        marginTop:"20px"
    }

    const codeArr = []
    function getRandom(min, max){
        return Math.floor(Math.random() * (max- min) + min)
    }

    function generateCode(){
        const alphabet = "abcdefghijklmnopqrstuvwxyz"
        const upperAlpha = alphabet.toUpperCase()
        const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,114,15,16,17,18,19,20,21,22,23,24,25]
        const mixed = []

        for(let i = 0; i < alphabet.length; i ++){
            mixed.push(alphabet[i])
            mixed.push(upperAlpha[i])
            mixed.push(numbers[i])
        }

        for(let i = 0; i < 10; i++){
            const arrNumber = getRandom(0,25)
            codeArr.push(mixed[arrNumber])
        }

        const myCode = codeArr.join("")
        setCode(myCode)

    }

    function inputCode(event){
        const {value} = event.target 
        setCheckCode(prevState => value)
        
    }

    function validateCode(event){
        event.preventDefault()
        if(code === checkCode){
            setErr("");
            sendEmail();
            setCode('')
            setCheckCode('')
        }
        else setErr("Invalid input")
    }


    return(
        <>
        <div className='formContainer'>
           
            <h1 className='contactTitle'>Contact</h1>
            <form className='form' onSubmit={validateCode}>
                <p className='formPara'>What is your name?</p>
            <input className='contactForm' type='text' name='name' onChange={(event)=> handleState(event, "mail")} placeholder='First and Last Name'></input>
                <p className='formPara'>What is your email</p>
            <input className='contactForm' type="email" name='email'onChange={(event)=> handleState(event, "mail")} placeholder='email'></input>
            <p className='formPara'>What is your phone number</p>
            <input className='contactForm' type='phone'onChange={(event)=> handleState(event, "mail")} placeholder='phone number'></input>
            <h1 onClick={generateCode} style={{color:'white'}}>Generate Code for bot protection</h1>
            <h2 style={{color:'white'}}>Your Code is: {code}</h2>
            <input type='text' onChange={inputCode} placeholder='code'></input>
            {setErr && <h1 style={{color:"red"}}>{err} </h1>}
            <button style={windowWidth < 800 ? buttonSize : {} }  className='contactSubmit'>Submit</button>
            </form>
        </div>
        </>
    )
}