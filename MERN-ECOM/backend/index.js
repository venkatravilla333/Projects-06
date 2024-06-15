
import express from 'express'
import PORT from './config.js'
import { dbURL } from './config.js'
import mongoose from 'mongoose'

var app = express()

app.get('/hello', (req, res) => {
  res.send('Hello server')
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

