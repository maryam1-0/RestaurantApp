import "./App.css"
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {Toaster} from "react-hot-toast"
import Home from "./pages/Home"
import Success from "./pages/Success"
import NotFound from "./pages/NotFound"
import About from "./components/About"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}>
        <Route path="/about" element={<About/>}/>
        </Route>

        <Route path="/success" element={<Success/>}/>
        <Route path="*" element={<NotFound/>}/>{/* any path that's not defined in here will fall in this * category and then NotFound page will be displayed */}
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
