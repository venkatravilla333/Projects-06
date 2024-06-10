import React, { useEffect, useState } from 'react'
import axois from 'axios'

function Home() {
  var [products, setProducts] = useState([])
  var [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    axois.get('http://localhost:5000/products')
      .then((res) => {
        console.log(res.data)
        setProducts(res.data)
        setLoading(false)
        
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
        
      })
  }, [])
  return (
    <div>
      <div>
        <h2>All Products</h2>
        {
          products.map((product) => {
            return (
              <>
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.quantity}</p>
              </>
            ); 
          })
        }
      </div>
    </div>
  )
}

export default Home