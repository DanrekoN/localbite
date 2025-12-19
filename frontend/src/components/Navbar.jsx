import { Link } from 'react-router-dom'

export default function Navbar({ user, setUser }) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/contact">Contact</Link>

      {user && <Link to="/booking">Booking</Link>}
      {user?.role === 'ADMIN' && <Link to="/admin">Admin</Link>}

      {!user && <Link to="/login">Login</Link>}
      {!user && <Link to="/register">Register</Link>}

      {user && (
        <button onClick={() => setUser(null)}>Logout</button>
      )}
    </nav>
  )
}
