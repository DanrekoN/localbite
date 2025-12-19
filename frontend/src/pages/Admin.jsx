import { useEffect, useState } from 'react'
import { getUsers } from '../api'

export default function Admin() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers().then(setUsers)
  }, [])

  return (
    <div>
      <h2>Admin Panel</h2>

      <ul>
        {users.map(u => (
          <li key={u.id}>
            {u.email} — {u.role}
          </li>
        ))}
      </ul>
    </div>
  )
}
