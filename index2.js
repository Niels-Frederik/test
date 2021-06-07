const express = require('express')
const app = express()
const port = 3000
let count = 0

app.get('/', (req, res) => {
  console.log("this is a test log")
  res.send('Hello World!')
})

//app.get('/metric', (req,res) => {
//  res.send(count)
//}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
