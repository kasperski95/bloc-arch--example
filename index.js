const express = require('express')
const app = express()
app.use(express.static('build'))
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname + '/build/' })
})
app.listen(process.env.PORT || 5000)
