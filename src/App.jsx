import { ToastContainer } from 'react-toastify'
import { useLocation } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import NavBar from './components/Header/NavBar'
import MainRouter from './MainRouter'

function App() {
  const location = useLocation()
  const isAdminPage = location.pathname === '/admin'

  return (
    <div className='overflow-x-hidden'>
      {/* <Loader /> */}
      <NavBar />
      <MainRouter />
      {!isAdminPage && <Footer />}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
      />
    </div>
  )
}

export default App