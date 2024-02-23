import express from 'express';
import {forgotPasswordController, loginController, registerController, testController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js';

// router object 
const router = express.Router();

// routing 

// REGITER || METHOD POST

router.post('/register', registerController);
// LOGIN || METHOD POST
router.post('/login', loginController);

// Forget Password || METHOD POST
router.post('/forgot-password', forgotPasswordController)

// test route
router.get("/test",requireSignIn,isAdmin,testController);

// Protected User route  auth
router.get('/user-auth', requireSignIn, (req,res)=>{
    res.status(200).send({ok:true});
})


// Protected Admin route  auth
router.get('/admin-auth', requireSignIn,isAdmin, (req,res)=>{
    res.status(200).send({ok:true});
})




export default router;