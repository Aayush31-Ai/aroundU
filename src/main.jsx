import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Explore from './pages/Explore'
import Request from './pages/Request'
import Saved from './pages/Saved'
import LandingPage from './components/LandingPage/LandingPage'
import Contact from './components/Footer/Contact'
import Common from './components/Common/Common'
import About from './components/Footer/About'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Common />
      },
      {
        path: "/explore",
        element: <Explore />
      },
      {
        path: "/request",
        element: <Request />
      },
      {
        path: "/saved",
        element: <Saved />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)