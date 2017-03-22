// Write a program that performs an HTTP GET request to get the average stock price.
// Use the first argument for a ticker symbol. Use the get method in the http module
// with the API provided by MarkitOnDemand.

// It would certainly be easier to test if you can grab the latest stock price,
//  but because the response is so small, there may not be an opportunity to demonstrate chunking.
//  On the API docs you will see an example request for data to create a chart.
// This will give 365 of daily prices. Use these prices to get an average.

const { readFile } = require('fs');
const { createServer, get } = require('http');

const server = createServer();
const [, , ...tickerSymbol] = process.argv
get(`http://dev.markitondemand.com/MODApis/Api/v2/InteractiveChart/json?parameters={"Normalized":false,"NumberOfDays":365,"DataPeriod":"Day","Elements":[{"Symbol":"${tickerSymbol}","Type":"price","Params":["c"]}]}`, (response) => {
  //get data from api
  //NumberOfDays
  let rawData= "";
  response.on('data', (chunk) => rawData += chunk)
  response.on('end', () => {
    try {
      let parsedData = JSON.parse(rawData)
      let arr365 = parsedData.Elements[0].DataSeries.close.values
      // add all values in array / number of active trading days
      let sum = arr365.reduce(function(a, b) {
        return a + b;
      }, 0);
      let averagePrice = sum / 252;
      console.log(averagePrice.toFixed(2))
    } catch (e) {
      console.log(e.message)
    }
  })
})
