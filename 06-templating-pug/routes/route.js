'use strict'

const { Router } = require('express');

const router = Router();
const bakedGoods = [
{
  name: 'pizza',
  price: 5.00
},
{
  name: 'pretzelTwists',
  price: 6.00
},
{
  name: 'donuts',
  price: 3.00
},
{
  name: 'muffin',
  price: 2.00
},
{
  name: 'coffee',
  price: 5.00
}
];
console.log("baked goods", bakedGoods)

router.get('/home',(req,res,next) => {
  res.render('index', {  url: `${req.url}`} )

});
router.get('/about',(req,res,next) => {
  res.render('about', { currentTime: new Date(), url: `${req.url}`} )

});
router.get('/inventory',(req,res,next) => {
  res.render('inventory', { bakedGoods: bakedGoods, url: `${req.url}`} )

});

module.exports = router
