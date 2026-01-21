import React from 'react'
import { Route, Routes } from 'react-router'
import LandingPage from './pages/LandingPage'
import Services from './pages/Services'
import ServiceDetailPage from './pages/ServiceDetailPage'
import About from './pages/About'
import Saved from './pages/Saved'
import AdminDashboard from './pages/AdminDashboard'

const MainRouter = () => {
  return (
   <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/services" element={<Services/>} />
    <Route path="/services/:providerId" element={<ServiceDetailPage />} />
    <Route path="/about" element={<About />} />
    <Route path="/saved" element={<Saved />} />
    <Route path="/admin" element={<AdminDashboard />} />
   </Routes>
  )
}

export default MainRouter