// Write a program that performs an HTTP GET request to get the average stock price.
// Use the first argument for a ticker symbol. Use the get method in the http module
// with the API provided by MarkitOnDemand.

// It would certainly be easier to test if you can grab the latest stock price,
//  but because the response is so small, there may not be an opportunity to demonstrate chunking.
//  On the API docs you will see an example request for data to create a chart.
// This will give 365 of daily prices. Use these prices to get an average.
//
//
// Avoid using encoded characters in your url: %22%3A%5B%22c%22%5D%7D%5D%7D
// Full Destructuring on the API response object and http module


// const { readFile } = require('fs');
// const { createServer, get } = require('http');

// const server = createServer();
// const [, , ...tickerSymbol] = process.argv
// get(`http://dev.markitondemand.com/MODApis/Api/v2/InteractiveChart/json?parameters={"Normalized":false,"NumberOfDays":365,"DataPeriod":"Day","Elements":[{"Symbol":"${tickerSymbol}","Type":"price","Params":["c"]}]}`, (response) => {
//   //get data from api
//   //NumberOfDays
//   let rawData = "";
//   response.on('data', (chunk) => rawData += chunk)
//   response.on('end', () => {
//     try {
//       let parsedData = JSON.parse(rawData)
//       let arr365 = parsedData.Elements[0].DataSeries.close.values
//         // add all values in array / number of active trading days
//       let sum = arr365.reduce(function(a, b) {
//         return a + b;
//       }, 0);
//       let averagePrice = sum / 252;
//       console.log(averagePrice.toFixed(2))
//     } catch (e) {
//       console.log(e.message)
//     }
//   })
// })

// Abstract a getJSON function. (This is good practice for when we write our own APIs):
// Promisify the getJSON function:
// const getJSON = url => { ... }
// getJSON('http://example.com').then(data => { ... })





const { readFile } = require('fs');
const { createServer, get } = require('http');
const server = createServer();
const [, , ...tickerSymbol] = process.argv
const getApi = require('./promisify-stocks')
const url = `http://dev.markitondemand.com/MODApis/Api/v2/InteractiveChart/json?parameters={"Normalized":false,"NumberOfDays":365,"DataPeriod":"Day","Elements":[{"Symbol":"${tickerSymbol}","Type":"price","Params":["c"]}]}`


getApi(url)
.then((rawData)=> {
  let parsedData = JSON.parse(rawData)
  return parsedData
})
.then((parsedData) => {
let { Elements: [ { DataSeries: { close: { values } } } ] } = parsedData
 return values
})
.then((values) => {
  return values.reduce((a,b) => {return a + b})
})
.then((sum) => {
  return sum / 252
})
.then((average) => {
  let price =  average.toFixed(2)
  return console.log(price)
}).catch((e)=> {
  console.log(e)
})
