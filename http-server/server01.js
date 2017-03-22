const { createReadStream } = require('fs');
const { createServer } = require('http');

const server = createServer();

server.on('request', (request, response) => {

  let file = createReadStream('./index.html')
  file.pipe(response)

})

server.listen(8080)
