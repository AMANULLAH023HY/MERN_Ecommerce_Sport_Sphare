import express from 'express'
// import colors from 'colors'
import dotenv from 'dotenv'

import authRoute from './routes/authRoute.js'


// configure env 
dotenv.config();
import morgan from 'morgan'

import connectDB from './config/db.js';




// database config
connectDB();


// rest object 

const app = express();

// middlewares 
app.use(express.json());
app.use(morgan('dev'));


//routes

app.use("/api/v1/user",authRoute);




// rest api 

app.get('/', (req,res)=>{
    res.send({
        message:"Welcome to Sport Sphare ecommerce "
    })
})


// PORT 

const PORT = process.env.PORT || 5000;

    app.listen(PORT,()=>{
        console.log(`Server Running on ${PORT}`);
    })