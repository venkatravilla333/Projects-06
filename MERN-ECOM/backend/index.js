
import express from 'express'
import PORT from './config.js'
import { dbURL } from './config.js'
import mongoose from 'mongoose'
import { products } from './products.js'
import cors from 'cors'

var app = express()
app.use(cors())


app.get('/', (req, res) => {
  res.send('Hello server')
})

//api for all products

app.get('/products', (req, res) => {

 return res.json(products)
})

//api for single product
app.get('/products/:id', (req, res) => {
  console.log(req.params)

 var product = products.find((p)=> p._id === req.params.id)

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

