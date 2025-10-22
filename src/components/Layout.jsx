import { useState, useEffect } from "react"
import { Outlet, Navigate, useNavigate} from "react-router-dom"
import NavBar from "./NavBar"

function Layout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()


   const login = () =>{
    setIsLoggedIn(true)
  }

  const logout = () =>{
    setIsLoggedIn(false)
  }

  useEffect(() =>{
    if (isLoggedIn) {
      navigate("/")
    } else {
      navigate("/login")
    }
  }, [isLoggedIn])

  return (
    <div className="layout">
{/* Add conditional rendering so users have to be logged in to see pages on the site */}
      {isLoggedIn ? <NavBar logout={logout}  /> : <Navigate to="/login" />}
      <Outlet context={login}/>
    </div>
  )
}

export default Layout
