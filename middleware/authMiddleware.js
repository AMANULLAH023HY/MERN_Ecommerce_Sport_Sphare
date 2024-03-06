// import JWT from 'jsonwebtoken'
// import userModel from '../models/userModel.js';

// // Protected routes token base

// const requireSignIn = async (req,res,next)=> {
//     try {
//         const decode  = JWT.verify(
//             req.headers.authorization,
//             process.env.JWT_SECRET
//             );
//             req.user = decode;
//         next()
//     } catch (error) {
//         console.log(error);
//     }
// };



// //  Admin access

// const isAdmin = async (req,res,next)=>{
// try {
//     const user = await userModel.findById(req.user._id);
    

//     if(user.role !== 1){
//         return res.status(401).json({
//             success:false,
//             message:"Unauthorized Access!"
//         })
//     }else{
//         next();
//     }




    
// } catch (error) {
//     console.log(error);
//     res.status(401).json({
//         success:false,
//         message:"Error in admin middleware",
//         error

//     })
    
// }

// }

// export{requireSignIn,isAdmin}




import JWT from 'jsonwebtoken';
import userModel from '../models/userModel.js';

// Middleware for protecting routes with JWT authentication
const requireSignIn = async (req, res, next) => {
    try {
        // Verify JWT token from request headers
        const decode = JWT.verify(
            req.headers.authorization,
            process.env.JWT_SECRET
        );
        // Attach decoded user information to the request object
        req.user = decode;
        // Continue to the next middleware or route handler
        next();
    } catch (error) {
        // Log and handle errors related to token verification
        console.log(error);
        res.status(401).json({
            success: false,
            message: "Unauthorized Access!"
        });
    }
};

// Middleware for checking if user is an admin
const isAdmin = async (req, res, next) => {
    try {
        // Find user by ID extracted from the token
        const user = await userModel.findById(req.user._id);
        // Check if user has admin role
        if (user.role !== 1) {
            // If not admin, send unauthorized response
            return res.status(401).json({
                success: false,
                message: "Unauthorized Access!"
            });
        } else {
            // If user is admin, continue to next middleware or route handler
            next();
        }
    } catch (error) {
        // Log and handle errors related to admin check
        console.log(error);
        res.status(401).json({
            success: false,
            message: "Error in admin middleware",
            error
        });
    }
};

// Export middleware functions for use in other files
// export { requireSignIn, isAdmin };

export {requireSignIn,isAdmin};
