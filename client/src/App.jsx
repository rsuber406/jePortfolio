import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import { ApiContext } from './ApiContext'
import SignIn from './components/SignIn'



export default function App(){
    const {user} = React.useContext(ApiContext)

    const home = React.useRef(null)
    const about = React.useRef(null)
    const contact = React.useRef(null)
    const education = React.useRef(null)
    
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        })
    }

    return(<>
    <BrowserRouter>
    
 <Header scrollToSection={scrollToSection}
            home={home}
            about= {about}
            contact ={contact}
            education ={education}
            user={user.token}
    />
    <Routes>
<Route path='/' element={
<>
 <div ref={home}>
    <Home ref={home} />

 </div>
 
  <div ref={about}>
  <About ref={about} />

  </div>

  <div ref={education}>

  </div>


<div ref={contact}>
    <Contact />
</div>
</>
} />
<Route path='/admin' element={<></>} />
<Route path='/signin' element={user.token? <Navigate to="/admin" /> : <SignIn />} />
    </Routes>

    </BrowserRouter>
    </>)
}