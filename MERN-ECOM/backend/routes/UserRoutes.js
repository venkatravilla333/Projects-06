
import express from 'express';

import { User } from '../models/UserModel.js';

var router = express.Router();

router.post('/registerUser', async (req, res) => {
  console.log(req.body)
  
  try {
    if (!req.body.name || !req.body.email || !req.body.password || !req.body.cpassword) {
      res.status(400).send('Need name, email, password, cpassword')
    }

    var existUser = await User.findOne({ email: req.body.email })

    var newUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      cpassword: req.body.cpassword
    }
    
    if (!existUser) {
      var user = await User.create(newUser)
      res.status(201).send(user)
    } else {
      res.send('User already exist')
    }
    
  } catch (error) {
    console.log(error)
    res.status(500).send('Server error')
  }
})

export default router