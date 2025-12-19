import mongoose from 'mongoose'
const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            dbNAME: process.env.DB_NAME,
        });
        console.log("MongoDB Connected.. !");
    } catch(error){
        console.error("MongoDB connection error:", err);
    }
};

export default connectDB;