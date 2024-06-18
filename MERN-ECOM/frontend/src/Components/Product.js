import React from 'react'

function Product({product}) {
  return (
    <div className='col-3 card m-2'>
      <a href=''>
        <img src={product.image} alt='' height='155px' className='mb-1' />
      </a>
        <strong>Name: {product.name}</strong>
        <strong>Price: {product.price}</strong>
    </div>
  );
}

export default Product