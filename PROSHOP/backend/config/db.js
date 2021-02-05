import mongoose from "mongoose";

const connectDb=async ()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useCreateIndex:true,
            useFindAndModify:false,
            useUnifiedTopology: true
        });
        console.log(`Mongo Connected: ${conn.connection.host}`.cyan.underline);
    }catch (error) {
        console.log(`Error: ${error.message}`.red.underline.bold)
        process.exit(1);
    }
}
export default connectDb;