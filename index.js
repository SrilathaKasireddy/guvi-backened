//npm init -y to install package json
// install express js --npm i express


const express = require('express')//import 3rd party package
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World ')
})

app.listen(3000)