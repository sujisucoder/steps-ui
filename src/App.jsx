import './App.css'

import { Route, Routes, useLocation } from 'react-router-dom'

import Footer from './components/footer/Footer'
import Navbar from "./components/header/Navbar"
import LandingPage from './components/pages/LandingPage'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'


function App() {


  return (
    <>
      <Navbar />
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} />
    </Routes>
      <Footer />  
    </>
  )
}

export default App
