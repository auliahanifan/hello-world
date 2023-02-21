const express = require('express')
const app = express()
const port = 3000
var os = require('os');

var count = 0
const version = process.env.VERSION || 'v3 - private-registry '

app.get('/', (req, res) => {
  console.log(`hello we get request: ${req} - ${version} - count hit ${count}`)
  count = count + 1
  res.send(`Hello World! ${os.hostname()} - ${version} - count hit ${count}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
