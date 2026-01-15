
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer/Footer'
import NavBar from './components/Header/NavBar'
import MainRouter from './MainRouter'

function App() {

  return (
    <div className='overflow-x-hidden'>
      {/* <Loader /> */}
      <NavBar />
      <MainRouter/>
<Footer />
<ToastContainer 
        position="top-right"
        autoClose={3000}
        theme="colored"
      />
    </div>
  )
}

export default App