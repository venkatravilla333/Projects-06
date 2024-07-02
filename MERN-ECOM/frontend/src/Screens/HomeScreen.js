import React, { useEffect, useState } from 'react'
// import { products } from '../products'
import Product from '../Components/Product'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../toolkit/Slices/productSlice/getAllProductsSlice'
// import {fetchProducts } from '../Redux/actions/productActions'

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
      dispatch(fetchAllProducts())
  }, [])

  var allProductsData = useSelector((state) => state.allproducts)
  console.log(allProductsData)
  
  var {loading, products, error} = allProductsData
  

  return (
    <div className='container'>
      <div className='row my-3'>
        {products.map((product) => {
          return <Product key={product._id} product={product} />
        })}
      </div>
    </div>
  )
}

export default HomeScreen


