import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'



export default function App(){


    return(<>
<BrowserRouter>
    <Header />

    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/about" element={<About />} />
    </Routes>

</BrowserRouter>
    
    </>)
}