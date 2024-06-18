import React from 'react'
import { products } from '../products'
import Product from '../Components/Product'

function HomeScreen() {
  return (
    <div className='container'>
      <div className='row my-3'>
        {products.map((product) => {
          return <Product product={product} />
        })}
      </div>
    </div>
  )
}

export default HomeScreen