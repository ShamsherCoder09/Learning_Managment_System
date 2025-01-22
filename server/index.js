import express from 'express';
import { config } from 'dotenv';
import { dbConnect } from './DabaBase/dbConnect.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRouter from './routers/userRouter.js'
const app = express();
config();

// default meddleware
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

// apis
app.use('/api/v1/user', userRouter)
const port = process.env.PORT || 3000;
dbConnect();
app.listen(port,()=>{
    console.log(`our server is running on ${port}`);
});

