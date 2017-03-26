 'use strict'

const  express  = require('express');
const app = express();

app.use(express.static('public'))
app.get('/',(req,res, next) => {
  res.send('hello World')
})
app.listen(8080)
