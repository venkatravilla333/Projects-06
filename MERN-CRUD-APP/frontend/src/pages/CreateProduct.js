import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'

function CreateProduct() {

 var navigate = useNavigate()


 var [name, setName] = useState('')
 var [price, setPrice] = useState('')
 var [quantity, setQuantity] = useState('')
 var [loading, setLoading] = useState(false)

  var submitHandler = (e) => {
    var data = {
      name,
      price,
      quantity,
    }
    e.preventDefault()
    setLoading(true)
    axios.post('http://localhost:5000/products', data)
      .then((res) => { 
        console.log(res)
        setLoading(false)
        navigate('/')

      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })

    
  }
  return (
    <div className='w-50 m-auto'>
      <div className='row my-5 border border-2 border-dark p-4 bg-light text-dark'>
        {loading ? <Spinner/> : ''}
        <div className='col-6 m-auto'>
          <form onSubmit={submitHandler}>
            <div>
              <label htmlFor=''>Product name</label>
              <input
                type='text'
                className='form-control'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor=''>Product price</label>
              <input
                type='text'
                className='form-control'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor=''>Product quantity</label>
              <input
                type='text'
                className='form-control'
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <button type='submit' className='btn btn-primary mt-3 fw-bold'>Save product</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct