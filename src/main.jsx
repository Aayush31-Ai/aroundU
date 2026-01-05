import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Test from './components/Test'
import App from './App'
import Explore from './components/Explore/Explore'
import Request from './components/Request/Request'
import Saved from './components/Saved/Saved'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Test />
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