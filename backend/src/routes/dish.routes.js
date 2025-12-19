const router = require('express').Router()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const auth = require('../middlewares/auth.middleware')
const role = require('../middlewares/role.middleware')

router.get('/', async (_, res) => {
  const dishes = await prisma.dish.findMany()
  res.json(dishes)
})

router.post('/', auth, role('ADMIN'), async (req, res) => {
  const dish = await prisma.dish.create({ data: req.body })
  res.json(dish)
})

module.exports = router
