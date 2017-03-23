//function which takes api as a param
//return promise
//resovles json from api
const { createServer, get } = require('http');
const getJSON = (url) => {

  return new Promise((res, rej) => {
    get(url, (response) => {
      response.on('error', (error) => {
        rej(error)
      })
      let rawData = "";
      response.on('data', (chunk) => rawData += chunk)
      response.on('end', () => {

        res(rawData)
      })
    })

  })
}

module.exports = getJSON
