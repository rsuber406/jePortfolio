import React from "react"
import "../index.css"
import {Link} from "react-router-dom"

export default function Header(){

  const  windowWidth = window.innerWidth

    if(windowWidth > 800){
        return(
            <>
            <div className="headerContainer">
                <div className="subHeadContainer">
                <div className="headerIntro">
                    <Link className="nameLink" to="/">
                <span>Je</span><span> |</span> <span className="headerMyName"> Cragman</span>
                </Link>
                </div>
                <div className="links">
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/about">About</Link>
                </div>
                </div>
                <div className="headerTransition">

                </div>
            </div>
            </>
        )
    }

}