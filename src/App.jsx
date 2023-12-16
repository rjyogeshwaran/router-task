import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import Container from './components/Container'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import All from "./components/All"
import DataScince from "../src/components/DataScience"
import CyberSecurity from "../src/components/CyberSecurity"
import FullStack from './components/FullStack'
import Career from "../src/components/Career"
function App() {

  

  return <>
    
    <BrowserRouter>
    <Title />
      <Routes>
        <Route path='/title' element={<Title />} />
        <Route path='/all' element={<All />} />
        <Route path='/fullStack' element={<FullStack/>} />
        <Route path='/dataScience' element={<DataScince />} />
        <Route path='/cyberSecurity' element={<CyberSecurity  />} />
        <Route path='/career' element={<Career />} />
        <Route path="*" element={<Navigate to="/all"/>}/>

      </Routes>

    </BrowserRouter>

  </>
}

export default App
