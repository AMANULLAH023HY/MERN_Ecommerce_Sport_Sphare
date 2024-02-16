import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'

// configure env 
dotenv.config();

// rest object 

const app = express();

// rest api 

app.get('/', (req,res)=>{
    res.send({
        message:"Welcome to Sport Sphare ecommerce "
    })
})


// PORT 

const PORT = process.env.PORT || 5000;

    app.listen(PORT,()=>{
        console.log(`Server Running on ${PORT}`.bgCyan.white);
    })