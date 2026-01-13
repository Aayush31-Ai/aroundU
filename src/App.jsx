import { useState } from 'react'
import './App.css'
import NavBar from './components/Header/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Loader from './components/Loader/Loader'
import LandingPage from './components/LandingPage/LandingPage'
import HowItWorks from './components/LandingPage/HowItWorks'
import WhyChooseUs from './components/LandingPage/WhyChooseUs'
import MostBookedServices from './components/LandingPage/MostBookedServices'

function App() {

  return (
    <>
      {/* <Loader /> */}
      <NavBar />
      <LandingPage/>
      <HowItWorks/>
      <MostBookedServices/>
      <WhyChooseUs/>
      <Footer />
    </>
  )
}

export default App