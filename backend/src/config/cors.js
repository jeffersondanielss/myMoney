module.exports = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'GET, POST, PUT, PATH, DELETE')
  res.header('Access-Control-Allow-Headers', 'Origin, x-Requested-With, Content-Type, Accept')
  next()
}