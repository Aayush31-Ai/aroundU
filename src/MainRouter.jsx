









import React from 'react'
import { Route, Routes } from 'react-router'
import LandingPage from './pages/LandingPage'
import Services from './pages/Services'

const MainRouter = () => {
  return (
   <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/services" element={<Services />} />
   </Routes>
  )
}

export default MainRouter