const express = require('express')

const app = express()
const port = 3400

app.get('/', (req, res) => {
  res.send('New Server')
})

app.listen(port, () => {
  console.log('Server Active in port: ' + port)
})
