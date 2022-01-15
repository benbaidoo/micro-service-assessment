const peopleData = require('./people.json')

const getPeople = (req, res) => {
  return res.json({
    results: peopleData,
    count: Object.keys(peopleData).length
  })
}

const errorRoute = (err, req, res, next) => {
  if (!res.headersSent) {
    return res.status(500).json({
      error: `No route found at ${req.path}`
    })
  }
  return next(err)
}

module.exports = {
  errorRoute,
  getPeople,
}