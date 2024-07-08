import express from 'express';
import jwt from 'jsonwebtoken';

import { User } from '../models/UserModel.js';
import { authService } from '../AuthMiddleware.js';

var router = express.Router();



router.post('/profile', authService, async (req, res) => {
  console.log(req.body);

  req.body.id = req._id

 var res =  await User.findById(req.body.id)
  
  console.log(req.body)

  
});

export default router;
