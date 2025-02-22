import { useState } from "react"

function Login() {
  const [username, setUsername] = useState("")

  function handleChange(e) {
    setUsername(e.target.value)
  }

  function handleLogin(e) {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleLogin}>
      <label for="username">Username</label>
      <div>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  )
}

export default Login
