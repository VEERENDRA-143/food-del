import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import bodyParser from "body-parser"
import userRouter from "./routes/userRoute.js"
import "dotenv/config"
import cartRouter from "./routes/cartRoute.js"

// App config
const app = express()
const port = process.env.port || 4000;

// Add middle ware
app.use(bodyParser.json());
app.use(cors())

// DB Connection
connectDB();

// Api End Point

app.use("/api/food",foodRouter)
app.use("/images",express.static("uploads"))
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Hi veeru Server Started On http://localhost:${port}`);
})
