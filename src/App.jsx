
import NavBar from './components/Header/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Loader from './components/Loader/Loader'
import LandingPage from './components/LandingPage/Hero'
import HowItWorks from './components/LandingPage/HowItWorks'
import WhyChooseUs from './components/LandingPage/WhyChooseUs'
import MostBookedServices from './components/LandingPage/MostBookedServices'
import MainRouter from './MainRouter'

function App() {

  return (
    <>
      <Loader />
      <NavBar />
      <MainRouter/>

    </>
  )
}

export default App