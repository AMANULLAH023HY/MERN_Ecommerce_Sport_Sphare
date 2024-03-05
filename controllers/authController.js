import { comparePassword, hashPassword } from "../helper/authHelper.js";
import userModel from "../models/userModel.js";

import JWT from "jsonwebtoken";

const registerController = async (req, res, next) => {
  try {
    const { name, email, password, phone, address, answer } = req.body;
    // Validation
    if (!name) {
      return res.status(400).json({
        message: "Name is required",
      });
    }

    if (!email) {
      return res.status(400).json({
        message: "Email is required",
      });
    }

    if (!password) {
      return res.status(400).json({
        message: "Password is required",
      });
    }

    if (!phone) {
      return res.status(400).json({
        message: "Phone no is required",
      });
    }

    if (!address) {
      return res.status(400).json({
        message: "Address is required",
      });
    }

    if (!answer) {
      return res.status(400).json({
        message: "Answer is required",
      });
    }

    // check user

    const existingUser = await userModel.findOne({ email });

    // Existing User

    if (existingUser) {
      return res.status(200).json({
        success: false,
        message: "Already register, please login",
      });
    }

    // register User

    const hashedPassword = await hashPassword(password);

    //save
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
      answer,
      
    });

    await user.save();

    res.status(200).json({
      success: true,
      message: "User register successfully!",
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};

// POST LOGIN
const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // validation
    if (!email || !password) {
      return res.status(404).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // check user
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).json({
        success: false,
        message: "Invalid password ",
      });
    }

    // create token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({
      success: true,
      message: "User login successfully!",
      user:{
        _id:user._id,
        name:user.name,
        email:user.email,
        phone:user.phone,
        address:user.address,
        role:user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

// Forgot Password Controller

const forgotPasswordController = async(req,res) =>{
try {

  const {email,answer, newPassword} = req.body;

  if(!email){
    res.status(400).send({
      success:"false",
      message:"Email is required"
    })
  };

  if(!answer){
    res.status(400).send({
      success:"false",
      message:"Answer is required"
    })
  };

  if(!newPassword){
    res.status(400).send({
      success:"false",
      message:"New Password is required"
    })
  };


  const user = await userModel.findOne({email,answer})
  if(!user){
    res.status(400).send({
      success:"false",
      message:"Wrong Email or Answer"
    })
  };


  const hashed = await hashPassword(newPassword);
  await userModel.findByIdAndUpdate(user._id, {password:hashed});

  res.status(200).send({
    success:true,
    message:"Password reset Successfully!"
  })
  
} catch (error) {
  console.log(error);
  res.status(500).send({
    success:false,
    message:"Something went wrong",
    error
  })
}

}

// test Controller
const testController = async (req, res, next) => {
  res.send("protected route");
};

export { registerController, loginController, testController, forgotPasswordController };
