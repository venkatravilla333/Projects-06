
import jwt from 'jsonwebtoken'

export var authMiddleware = (req, res, next) => {
  // console.log(token) 

    var token = req.header('x-token');
    console.log(token)
  if (!token) {
      return res.status(401).send('no token') 
  } 
  
  var decode = jwt.verify(JSON.parse(token) , 'hello')
  console.log(decode)
  req.userId = decode.userId
  next()

}