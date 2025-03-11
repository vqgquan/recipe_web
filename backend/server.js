import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js'
import recipieRoute from './router/recipie.router.js'

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/recipies", recipieRoute)


app.listen(5000, () =>{
    connectDB();
    console.log("Serever start at http://localhost:5000");
})