import mongoose from 'mongoose'

// import colors from 'colors';

const connectDB = async ()=>{
    try { 

        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to mongodb Database ${conn.connection.host}`);
        
    } catch (error) {

        console.log(`Error in mongodb ${error} `)
        // console.log(error);
        
    }
}

export default connectDB;






