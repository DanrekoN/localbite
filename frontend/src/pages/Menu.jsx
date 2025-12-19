import { useEffect, useState } from 'react'
import api from '../services/api'

export default function Menu() {
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    api.get('/dishes').then(res => setDishes(res.data))
  }, [])

  return (
    <>
      <h2>Menu</h2>
      {dishes.map(d => (
        <div key={d.id}>
          {d.title} — ${d.price}
        </div>
      ))}
    </>
  )
}
