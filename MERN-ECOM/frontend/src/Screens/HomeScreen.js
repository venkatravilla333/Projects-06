import React, { useEffect, useState } from 'react'
// import { products } from '../products'
import Product from '../Components/Product'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {fetchProducts } from '../Redux/actions/productActions'

function HomeScreen() {
//  var [products, setProducts] = useState([])
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:5000/products')
  //     .then((res) => {
  //       console.log(res)
  //       setProducts(res.data)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     });
  // }, [])

  var dispatch = useDispatch()

  useEffect(() => {
  return dispatch(fetchProducts())
  }, [])

  var data = useSelector((state) => state)
  
  var {loading, products, error} = data
  

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


