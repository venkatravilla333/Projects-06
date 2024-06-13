import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

function EditProduct() {
  var {id} = useParams()
  var navigate = useNavigate();
  var [name, setName] = useState('');
  var [price, setPrice] = useState('');
  var [quantity, setQuantity] = useState('');
  var [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => {
        console.log(res);
        setName(res.data.name);
        setPrice(res.data.price);
        setQuantity(res.data.quantity);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    
  }, [])

  var submitHandler = (e) => {
    var data = {
      name,
      price,
      quantity,
    };
    e.preventDefault();
    setLoading(true);
    axios
      .put(`http://localhost:5000/products/${id}`, data)
      .then((res) => {
        console.log(res);
        setName(res.data)
        setPrice(res.data)
        setQuantity(res.data)
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  return (
    <div className='w-50 m-auto'>
      <div className='row my-5 border border-2 border-dark p-4 bg-light text-dark'>
        {loading ? <Spinner /> : ''}
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
            <button type='submit' className='btn btn-primary mt-3 fw-bold'>
              Save product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
