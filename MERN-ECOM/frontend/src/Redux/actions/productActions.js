
import axios from 'axios'
export var GET_PRODUCT_REQUEST = 'GET_PRODUCT_REQUEST';
export var GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export var GET_PRODUCT_FAILURE = 'GET_PRODUCT_FAILURE';

var getProductRequest = () => {
  return {
    type: GET_PRODUCT_REQUEST
  }
}
var getProductSuccess = (productsdata) => {
  return {
    type: GET_PRODUCT_SUCCESS,
    payload: productsdata
  }
}
var getProductFailure = (errormsg) => {
  return {
    type: GET_PRODUCT_FAILURE,
    payload: errormsg
  }
}

export var fetchProducts = () => {
  return (dispatch) => {
    dispatch(getProductRequest)
    axios
      .get('http://localhost:5000/products')
      .then((res) => {
        dispatch(getProductSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getProductFailure(err));
      });
  }
}