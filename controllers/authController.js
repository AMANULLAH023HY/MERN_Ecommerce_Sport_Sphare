

import { hashPassword } from "../helper/authHelper.js";
import userModel from "../models/userModel.js";


const registerController = async(req,res,next)=>{

    try {

        const {name,email,password,phone,address} = req.body
// Validation
        if(!name){
            return res.status(400).json({
                error:"Name is required"
            })
        }

        if(!email){
            return res.status(400).json({
                error:"Email is required"
            })
        }

        if(!password){
            return res.status(400).json({
                error:"Password is required"
            })
        }

        if(!phone){
            return res.status(400).json({
                error:"Phone no is required"
            })
        }

        if(!address){
            return res.status(400).json({
                error:"Address is required"
            })
        }


        // check user 

        const existingUser = await userModel.findOne({email});

        // Existing User

        if(existingUser){
            return res.status(200).json({
                success:true,
                message:"Already register, please login",
            })
        }


        // register User

        const hashedPassword = await hashPassword(password);

        //save
        const user = await new userModel({name,email,phone,address,password:hashedPassword});

        await user.save();

        res.status(200).json({
            success:true,
            message:"User register successfully!",
            user

        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Error in Registration",
            error
        })
        
    }


}


export {registerController}