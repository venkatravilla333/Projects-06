import React, { useState } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import { useNavigate, useParams } from 'react-router-dom'

function DeleteProduct() {
  var [loading, setLoading] = useState(false)
  var { id } = useParams()
  var navigate = useNavigate()

  var handleDelete = () => {
    setLoading(true)
    axios.delete(`http://localhost:5000/products/${id}`)
      .then(() => {
        setLoading(false)
        navigate('/')
       })
      .catch((error) => {
        console.log(error)
        setLoading(false)
        
      })
    
  }
  return (
    <div className='my-5 border border-2 border-dark w-50 p-4 m-auto bg-light'>
      <h4>Are you sure to delete ?</h4>
      {loading ? <Spinner/>: ''}
      <div className='my-4'>
        <button className='btn btn-danger w-50' onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default DeleteProduct