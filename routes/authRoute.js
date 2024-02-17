import express from 'express';
import {loginController, registerController} from '../controllers/authController.js'

// router object 
const router = express.Router();

// routing 

// REGITER || METHOD POST

router.post('/register', registerController);
// LOGIN || METHOD POST
router.post('/login', loginController);



export default router;