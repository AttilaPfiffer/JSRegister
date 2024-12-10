import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
        const {logout} = useContext("")
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bejelentkezés és regisztráció</h1>
      </header>
      <ul class="nav">
        <li class="nav-item">
            <Link to = "/" class="nav-link active">Kezdőlap</Link>
        </li>
        <li class="nav-item">
            <Link to = "/login" class="nav-link active">Login</Link>
        </li>
        <li class="nav-item">
            <Link to = "/register" class="nav-link active">Register</Link>
        </li>
        <li class="nav-item">
            <Link to = "/logout" class="nav-link active">Logout</Link>
        </li>
        
    </ul>
    <Outlet />
        <footer>Minden jog fenntartva</footer>
    </div>
  )
}
