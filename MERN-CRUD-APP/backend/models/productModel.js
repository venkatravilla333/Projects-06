

import mongoose from 'mongoose'

var productShema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  quantity: {
    type: Number,
    require: true
  },
  
}, {timestamps: true})


export var ProductModel = mongoose.model('products', productShema)