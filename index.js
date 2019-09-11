exports.helloWorld = (req, res) => {
  const message = req.query.message || res.body.message || 'Hello world!'
  res.status(200).send(message)
}
