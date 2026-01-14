import { BrowserRouter } from "react-router"
import App from "./App"
import { createRoot } from "react-dom/client"
import './index.css'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
<App/>
</BrowserRouter>
)