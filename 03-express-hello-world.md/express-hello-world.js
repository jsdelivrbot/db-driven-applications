// toISOString()
// Make a Node.js program named express-hello-world.js that outputs "Hello World" to browsers making a GET request to the root (/) url.

// Also, to browsers that make a GET request to the /time url, send the current date and time in ISO format: 2015-12-31T23:59:59.999Z.

// Finally, use an environment variable named PORT for the port number if one is provided. If one is not provided use 8080.

// i.e. The command below should start a server on the port 1337.

// PORT=1337 node express-hello-world.js
// and the command below should start a server on the port 8080.
 'use strict'

const  express  = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

//middleware

app.use(express.static(__dirname+ '/public'))
app.get('/', (request,response, next)=> {
 response.send(`<h1>Hello World </h1>`)
})


app.get('/time', (request, response, next)=> {
  response.send(new Date())
})


app.listen(PORT,()=> {
  console.log(`server listening on port ${PORT}`);
})
