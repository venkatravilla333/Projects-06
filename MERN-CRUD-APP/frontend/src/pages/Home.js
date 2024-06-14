import React, { useEffect, useState } from 'react'
import axois from 'axios'
import {Link} from 'react-router-dom'
import Spinner from '../components/Spinner'

function Home() {
  var [products, setProducts] = useState([])
  var [loading, setLoading] = useState(false)
  console.log('render')
  
  useEffect(() => {
    console.log('effect runs')
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
    <div className='m-5'>
      <div className='d-flex justify-content-between'>
        <h4>List of Products</h4>
        <div>
          <Link to={`/products/create`}>
            <i className="bi bi-plus-square fs-3"></i>
          </Link>
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className='mx-2 d-flex justify-content-center my-4'>
          <table className='w-100 border border-2 border-primary table'>
            <thead>
              <tr className='border border-2 border-primary bg-dark'>
                <th>No</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => {
                return (
                  <tr className='border border-2 border-primary'>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>
                      <div>
                        <span className=''>
                          <Link to={`/products/showDetails/${product._id}`}>
                            <i class='bi bi-info-circle-fill'></i>
                          </Link>
                        </span>
                        <span className='px-4'>
                          <Link to={`/products/edit/${product._id}`}>
                            <i class='bi bi-pencil-square'></i>
                          </Link>
                        </span>
                        <span className=''>
                          <Link to={`/products/delete/${product._id}`}>
                            <i class='bi bi-trash3-fill'></i>
                          </Link>
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Home