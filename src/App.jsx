import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Login from "./components/Login"
import ErrorPage from "./components/ErrorPage"
import Layout from "./components/Layout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<ErrorPage />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
