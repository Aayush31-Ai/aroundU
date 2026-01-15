import React from 'react'
import { Route, Routes } from 'react-router'
import LandingPage from './pages/LandingPage'
import Services from './pages/Services'
import ServiceDetailPage from './pages/ServiceDetailPage'
import About from './components/Footer/About'

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:providerId" element={<ServiceDetailPage />} />
      <Route path='/about' element={<About />} />
    </Routes>
  )
}

export default MainRouter