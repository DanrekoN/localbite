const router = require('express').Router()
const { PrismaClient } = require('@prisma/client')
const role = require('../middlewares/role.middleware')

const prisma = new PrismaClient()

// только для ADMIN
router.get('/users', role('ADMIN'), async (req, res) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      role: true,
      createdAt: true
    }
  })

  res.json(users)
})

router.get('/dishes', role('ADMIN'), async (req, res) => {
  const dishes = await prisma.dish.findMany()
  res.json(dishes)
})

module.exports = router
