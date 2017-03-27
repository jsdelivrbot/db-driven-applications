 'use strict'

const  express  = require('express');
const app = express();
const route = require('./routes/chickens')

app.use(route)
app.listen(8081)
