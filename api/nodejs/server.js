const app = require('./app')

const PORT = 8001
app.listen(PORT, () => {
  console.log(`node microservice app is running on ${PORT}.`)
})