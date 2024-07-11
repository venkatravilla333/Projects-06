import express from 'express';
import jwt from 'jsonwebtoken';

import { User } from '../models/UserModel.js';
import { authMiddleware } from '../AuthMiddleware.js';

var router = express.Router();



router.get('/profile', authMiddleware, async (req, res) => {

  console.log('me',req.userId)

 var existUserObj =  await User.findById(req.userId)
  
  if (existUserObj) {
    return res.json(existUserObj)
  } else {
    return res.status(400).send('user not found')
}
  
});

export default router;
