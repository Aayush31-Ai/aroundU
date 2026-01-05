import { useState } from 'react'
import './App.css'
import NavBar from './components/Header/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Loader from './components/Loader/Loader'
import LandingPage from './components/LandingPage/LandingPage'

function App() {

  return (
    <>
    <Loader/>
      <NavBar />
      <LandingPage/>
      {/* <Footer /> */}
    </>
  )
}

export default App