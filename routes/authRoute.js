import express from 'express';
import {loginController, registerController, testController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js';

// router object 
const router = express.Router();

// routing 

// REGITER || METHOD POST

router.post('/register', registerController);
// LOGIN || METHOD POST
router.post('/login', loginController);
// test route
router.get("/test",requireSignIn,isAdmin,testController);



export default router;