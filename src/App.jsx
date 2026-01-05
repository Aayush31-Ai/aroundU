import { useState } from 'react'
import './App.css'
import NavBar from './components/Header/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Loader from './components/Loader'

function App() {

  return (
    <>
    <Loader/>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App