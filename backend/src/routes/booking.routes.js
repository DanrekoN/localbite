const router = require('express').Router()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const auth = require('../middlewares/auth.middleware')
const role = require('../middlewares/role.middleware')

router.post('/', async (req, res) => {
  const booking = await prisma.booking.create({ data: req.body })
  res.json(booking)
})

router.get('/', auth, role('ADMIN'), async (_, res) => {
  const bookings = await prisma.booking.findMany()
  res.json(bookings)
})

module.exports = router
