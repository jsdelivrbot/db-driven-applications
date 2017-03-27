 'use strict'

const  express  = require('express');
const app = express();

app.use(express.static('pages'))
app.get('/home',(req,res, next) => {
  // res.send('pages/home.html')
})
app.listen(8080)
