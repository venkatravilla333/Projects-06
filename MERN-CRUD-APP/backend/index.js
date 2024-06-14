// var express = require('express')

import express from 'express'
import { PORT } from './config.js'
import { mongodbURL } from './config.js'
import mongoose from 'mongoose'
import { ProductModel } from './models/productModel.js'
import productRoutes from './routes/productRoutes.js'
import cors from 'cors'

var app = express()

app.use(cors())

app.use(express.json()) 

app.get('/', (req, res) => {
  console.log(req.body)
  res.send({data: 'Hello server'})
})

app.use('/products', productRoutes)

app.listen(PORT, () => {
  console.log(`SERVER STARTED IN PORT ${PORT}`)
})

mongoose.connect(mongodbURL)
  .then(() => {
    console.log('DB CONNECTED SUCCESSFULLY')
   })
  .catch((err) => {
    console.log(err)
  })






