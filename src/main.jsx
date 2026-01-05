import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Explore from './pages/Explore'
import Request from './pages/Request'
import Saved from './pages/Saved'
import LandingPage from './pages/LandingPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />
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
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)