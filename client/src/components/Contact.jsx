import React from 'react'
import "../index.css"
import Transition from './Transition'

export default function Contact(){

    return(
        <>
        <div className='formContainer'>
           
            <h1 className='contactTitle'>Contact</h1>
            <form className='form'>
                <p className='formPara'>What is your name?</p>
            <input className='contactForm' type='text' name='name' placeholder='First and Last Name'></input>
                <p className='formPara'>What is your email</p>
            <input className='contactForm' type="email" name='email' placeholder='email'></input>
            <p className='formPara'>What is your phone number</p>
            <input className='contactForm' type='phone' placeholder='phone number'></input>
            <button className='contactSubmit'>Submit</button>
            </form>
        </div>
        </>
    )
}