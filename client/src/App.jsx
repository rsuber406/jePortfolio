import React from 'react'
import Header from './components/Header.jsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import { ApiContext } from './ApiContext.jsx'
import SignIn from './components/SignIn.jsx'
import Admin from './components/Admin.jsx'
import ProtectedRoute from "./components/ProtectedRoute.jsx"
import Education from './components/Education.jsx'



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
    <Education />
  </div>


<div ref={contact}>
    <Contact />
</div>
</>
} />
<Route path='/admin' element={<ProtectedRoute token={user.token}>
    <Admin  />
</ProtectedRoute>} />
<Route path='/signin' element={user.token? <Navigate to="/admin" /> : <SignIn />} />
    </Routes>

    </BrowserRouter>
    </>)
}