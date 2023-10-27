const express = require('express')
const cors = require('cors')
const routerAPI = require('./routes/index')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('ok')
})

app.use(cors())
app.use(express.json())

routerAPI(app)

app.listen(port, () => {
  console.log('Server Active in port: ' + port)
})
