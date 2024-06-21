
import express from 'express'
import PORT from './config.js'
import { dbURL } from './config.js'
import mongoose from 'mongoose'
// import { products } from './products.js'
import cors from 'cors'
import { Product } from './models/ProductModel.js'

var app = express()
app.use(cors())


app.get('/', (req, res) => {
  res.send('Hello server')
})

//api for all products

app.get('/products', async(req, res) => {

var products = await Product.find({})
 return res.json(products)
})

//api for single product
app.get('/products/:id', async(req, res) => {
  console.log(req.params)
  var { id } = req.params
 var product = await Product.findById(id)
 return res.json(product)
})
app.listen(PORT, () => {
  console.log( `SERVER STARTED IN PORT ${PORT}`)
})

mongoose.connect(dbURL)
  .then(() => {
  console.log('DB CONNECTED')
  }).catch((error) => {
  console.log(error)
})

