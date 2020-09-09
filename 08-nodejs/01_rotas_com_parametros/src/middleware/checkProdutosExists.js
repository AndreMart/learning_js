module.exports = (req, res, next) => {
  const{index} = req.params
  console.log(produtos)
  if(!produtos[index]) {
      return res.status(400).json({error: 'user name not found'})
  }
  return next()
}

