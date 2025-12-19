const router = require('express').Router()
const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')

const prisma = new PrismaClient()

// REGISTER
router.post('/register', async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email и пароль обязательны' })
  }

  const existingUser = await prisma.user.findUnique({
    where: { email }
  })

  if (existingUser) {
    return res.status(400).json({ message: 'Пользователь уже существует' })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      role: 'USER'
    }
  })

  res.json({
    message: 'Регистрация успешна',
    user: {
      id: user.id,
      email: user.email,
      role: user.role
    }
  })
})

// LOGIN
router.post('/login', async (req, res) => {
  const { email, password } = req.body

  const user = await prisma.user.findUnique({
    where: { email }
  })

  if (!user) {
    return res.status(401).json({ message: 'Неверные данные' })
  }

  const isValid = await bcrypt.compare(password, user.password)

  if (!isValid) {
    return res.status(401).json({ message: 'Неверные данные' })
  }

  res.json({
    message: 'Вход успешен',
    user: {
      id: user.id,
      email: user.email,
      role: user.role
    }
  })
})

module.exports = router
