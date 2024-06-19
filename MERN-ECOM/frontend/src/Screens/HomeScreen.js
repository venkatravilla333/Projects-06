import React, { useEffect, useState } from 'react'
// import { products } from '../products'
import Product from '../Components/Product'
import axios from 'axios'

function HomeScreen() {
 var [products, setProducts] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:5000/products')
      .then((res) => {
        console.log(res)
        setProducts(res.data)
      })
      .catch((error) => {
        console.log(error)
      });
  }, [])
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