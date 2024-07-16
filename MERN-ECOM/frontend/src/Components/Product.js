import React from 'react'
import Rating from './Rating';
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { addToCart } from '../toolkit/Slices/cartSlice/cartSlice';




function Product({ product }) {

  var dispatch = useDispatch()
  
  var addToCartHandler = (Productdata) => {
   dispatch(addToCart(Productdata))
  }
  return (
    <div className='col-3 card m-2'>
      <Link to={`products/${product._id}`}>
        <img src={product.image} alt='' height='155px' className='mb-1' />
      </Link>
      <strong>Name: {product.name}</strong>
      <strong>Price: {product.price}</strong>
      <div className='my-2'>
        <Rating value={product.rating} reviewtext={`${product.numreviews} reviews`} />
      </div>
      <button className='btn btn-warning w-50 m-auto  mb-3 fw-medium' onClick={()=>addToCartHandler(product)}>Add To Cart</button>
    </div>
  );
}

export default Product