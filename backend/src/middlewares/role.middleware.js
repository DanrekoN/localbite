module.exports = role => (req, res, next) => {
  if (req.user.role !== role)
    return res.status(403).json({ message: 'Access denied' })
  next()
}

module.exports = (requiredRole) => {
  return (req, res, next) => {
    const role = req.headers['x-role']

    if (!role || role !== requiredRole) {
      return res.status(403).json({ message: 'Доступ запрещён' })
    }

    next()
  }
}
