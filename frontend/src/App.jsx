import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Menu from './pages/Menu'
import Booking from './pages/Booking'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Admin from './pages/Admin'

function App() {
  const [user, setUser] = useState(null)

  return (
    <>
      <Navbar user={user} setUser={setUser} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/booking"
          element={user ? <Booking /> : <Navigate to="/login" />}
        />

        <Route
          path="/login"
          element={<Login setUser={setUser} />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/admin"
          element={
            user?.role === 'ADMIN'
              ? <Admin />
              : <Navigate to="/" />
          }
        />
      </Routes>
    </>
  )
}

export default App
