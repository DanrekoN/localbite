require('dotenv').config()
const express = require('express')
const cors = require('cors')

const authRoutes = require('./routes/auth.routes')
const dishRoutes = require('./routes/dish.routes')
const bookingRoutes = require('./routes/booking.routes')
const messageRoutes = require('./routes/message.routes')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/dishes', dishRoutes)
app.use('/api/bookings', bookingRoutes)
app.use('/api/messages', messageRoutes)
app.use('/api/admin', require('./routes/admin.routes'))
app.use('/api/auth', require('./routes/auth.routes'))

app.listen(5000, () => {
  console.log('Backend running on http://localhost:5000')
})
