import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { useSnackbar } from 'notistack';
import BackButton from '../components/BackButton';

function CreateProduct() {

  var navigate = useNavigate()
 var {enqueueSnackbar} =  useSnackbar()


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
        enqueueSnackbar('Product created successfully', {variant:'success'})
        navigate('/')

      })
      .catch((error) => {
        console.log(error)
        setLoading(false)
         enqueueSnackbar('Error', {
           variant: 'error',
         });
      })

    
  }
  return (
    <div>
      <div className='text-start ms-4 mt-4'>
        <BackButton />
      </div>
      <div className='w-50 m-auto'>
        <div className='row my-5 border border-2 border-info p-4 bg-light text-dark'>
          {loading ? <Spinner /> : ''}
          <div className='col-6 m-auto'>
            <form onSubmit={submitHandler}>
              <div>
                <label htmlFor=''>Product name</label>
                <input
                  type='text'
                  className='form-control border border-2 border-dark'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor=''>Product price</label>
                <input
                  type='text'
                  className='form-control border border-2 border-dark'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor=''>Product quantity</label>
                <input
                  type='text'
                  className='form-control border border-2 border-dark'
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <button type='submit' className='btn btn-primary mt-3 fw-bold'>
                Save product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct