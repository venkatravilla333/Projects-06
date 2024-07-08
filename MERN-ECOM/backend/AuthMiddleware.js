
import jwt from 'jsonwebtoken'

export let authService = (req, res, next) => {
 var token =  req.headers('token')

  if (!token) {
    console.log('no token')
  } else {
    var userId = jwt.verify(token, 'secretkey');
    req._id = userId
  }
}