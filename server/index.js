import express from 'express';
import { config } from 'dotenv';
import { dbConnect } from './DabaBase/dbConnect.js';
const app = express();
config();

const port = process.env.PORT || 3000;
dbConnect();
app.listen(port,()=>{
    console.log(`our server is running on ${port}`);
});

