import api from '../services/api'

export default function Contact() {
  const submit = async e => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    await api.post('/messages', data)
    alert('Message sent')
    e.target.reset()
  }

  return (
    <>
      <h2>Contact</h2>
      <form onSubmit={submit}>
        <input name="name" placeholder="Name" required />
        <input name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required />
        <button>Send</button>
      </form>
    </>
  )
}
