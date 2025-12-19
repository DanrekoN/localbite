const router = require('express').Router()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const auth = require('../middlewares/auth.middleware')
const role = require('../middlewares/role.middleware')

router.post('/', async (req, res) => {
  const msg = await prisma.message.create({ data: req.body })
  res.json(msg)
})

router.get('/', auth, role('ADMIN'), async (_, res) => {
  const msgs = await prisma.message.findMany()
  res.json(msgs)
})

module.exports = router
