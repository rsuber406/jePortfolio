import React from "react"
import "../index.css"
import {Link} from "react-router-dom"

export default function Header(props){

  const  windowWidth = window.innerWidth
const {scrollToSection, home, about, contact, education, user} = props
const [displayNav, setDisplayNav] = React.useState(false)

function showNav(){
    setDisplayNav(prevState => !prevState)
}

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

               <li onClick={()=> scrollToSection(home)} className="link" >Home</li>

                <li onClick={()=> scrollToSection(about)} className="link" >About</li>
                <li onClick={()=> scrollToSection(education)} className="link">Education</li>
                <li onClick={()=> scrollToSection(contact)} className="link" >Contact</li>
               {user ? <Link to="/" className="link">Sign Out</Link> :<Link to="/signin" className="link">Sign In</Link>}
               {user && <Link to="/admin" className="link">Admin</Link>}
                </div>
                </div>
                <div className="headerTransition">

                </div>
            </div>
            </>
        )
    }

    else {
        return(
            <div className="headerContainer">
                <div className="subHeadContainer">
                <div className="headerIntro">
                    <Link className="nameLink" to="/">
                <span>Je</span><span> |</span> <span className="headerMyName"> Cragman</span>
                </Link>
                </div>
                <div className="links">
                    <div style={{backgroundColor: "white", opacity:0.8, zIndex: 1, position:"relative", top:"50px"}}>
                      {displayNav ? <h2 onClick={showNav}>X</h2> : <h2 onClick={showNav}>&#9776;</h2>}
             {displayNav && <li onClick={()=> scrollToSection(home)} className="link" >Home</li>}

            { displayNav && <li onClick={()=> scrollToSection(about)} className="link" >About</li>}
              { displayNav &&<li onClick={()=> scrollToSection(education)} className="link">Education</li>}
              {displayNav && <li onClick={()=> scrollToSection(contact)} className="link" >Contact</li>}
             {displayNav && <div>

               {user ? <Link to="/" className="link">Sign Out</Link> :<Link to="/signin" className="link">Sign In</Link>}
               {user && <Link to="/admin" className="link">Admin</Link>}
              </div>}

                    </div>
                </div>
                </div>
               
            </div>
        )
    }

}