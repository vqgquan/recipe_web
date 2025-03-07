import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js'
dotenv.config();

const app = express();

app.get("/",(req, res) => {
    res.send("Server is live")
})

app.listen(5000, () =>{
    connectDB();
    console.log("Serever start at http://localhost:5000");
})