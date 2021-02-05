import express from "express";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import errorHandler from "./middleware/error.js";
import colors from "colors";

//load end vars
dotenv.config();
//connect database
connectDb();
const app=express();
app.get("/",((req, res) => {
    res.send("Api is running")
}));
//routes
app.use("/api/products",productRoutes)

//errorHandler
app.use(errorHandler);

const PORT=process.env.PORT||5000;
app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold));
