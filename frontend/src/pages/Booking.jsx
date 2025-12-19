import api from '../services/api'

export default function Booking() {
  const submit = async e => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    await api.post('/bookings', data)
    alert('Booking sent')
    e.target.reset()
  }

  return (
    <>
      <h2>Book a table</h2>
      <form onSubmit={submit}>
        <input name="date" placeholder="Date" required />
        <input name="time" placeholder="Time" required />
        <input name="guests" placeholder="Guests" required />
        <input name="phone" placeholder="Phone" required />
        <input name="comment" placeholder="Comment" />
        <button>Send</button>
      </form>
    </>
  )
}
