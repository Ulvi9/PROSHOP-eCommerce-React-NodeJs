import express from "express";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import errorHandler from "./middleware/error.js";
import colors from "colors";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadsRoutes from "./routes/uploadsRoutes.js"
import path from "path";
import morgan from "morgan";


//load end vars
dotenv.config({path:"../.env"});
//connect database
connectDb();
const app=express();

//body parser
app.use(express.json());
//morgan
if(process.env.NODE_ENV="development"){
    app.use(morgan("dev"));
}

//routes
app.use("/api/products",productRoutes);
app.use("/api/users",userRoutes);
app.use("/api/orders",orderRoutes);
app.use("/api/upload",uploadsRoutes);
//static files
const __dirname=path.resolve();
app.use("/uploads",express.static(path.join(__dirname,"/uploads")));
//errorHandler


//run mode
if (process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"/frontend/build")));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"frontend","build","index.html"))
    })
}else{
    app.get("/",((req, res) => {
        res.send("Api is running")
    }));
}

app.use(errorHandler);
const PORT=process.env.PORT||5000;
app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold));
