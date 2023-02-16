const express = require('express')
const app = express()
const port = 3000
var os = require('os');

app.get('/', (req, res) => {
  console.log(`hello we get request: ${req}`)
  res.send(`Hello World! ${os.hostname()}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
