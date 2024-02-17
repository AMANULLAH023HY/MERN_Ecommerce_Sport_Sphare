import express from 'express';
import {registerController} from '../controllers/authController.js'

// router object 
const router = express.Router();

// routing 

// REGITER || METHOD POST

router.post('/register', registerController);



export default router;