import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from './config/db.js'
import Recipie from './models/recipie.model.js';
import mongoose from 'mongoose';
dotenv.config();

const app = express();

app.use(express.json());

app.get("/",(req, res) => {
    res.send("Server is live")
})

app.get("/api/recipies", async (req, res) => {
    try {
        const recipies = await Recipie.find({});
        res.status(200).json({success:true, data: recipies});
    } catch (error) {
        console.log("Error in fetching recipies: ", error.message);
        res.status(500).json({success:false, message: "Server error"})
    }
})

app.post("/api/recipies", async (req,res) => {
    const recipie = req.body;

    if(!recipie.name || !recipie.image){
        return res.status(400).json({success:false, message: "Please provide all fields"})
    }

    const newRecipie = Recipie(recipie)

    try {
        await newRecipie.save();
        res.status(201).json({success:true, data: newRecipie});
    } catch (error) {
        console.error("Error is in Create recipie", error.message);
        res.status(500).json({success:false, message: "Server error"});
    }
})

app.put("/api/recipies/:id", async (req, res) => {
    const {id} = req.params;

    const recipie = req.body;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"Invalid product id"})
    }

    try {
        const updateRecipie = await Recipie.findByIdAndUpdate(id, recipie, {new: true})
        res.status(200).json({success:true, data: updateRecipie});
    } catch (error) {
        res.status(500).json({success:false, message: "Server error"});
    }
})

app.delete("/api/recipies/:id", async (req,res) => {
    const {id} = req.params;
    console.log("id: ", id);

    try {
        await Recipie.findByIdAndDelete(id);
        res.status(300).json({success:true, message: "Product deleted"})
    } catch (error) {
        res.status(404).json({success:false, message: "Product not found"})
    }
})

app.listen(5000, () =>{
    connectDB();
    console.log("Serever start at http://localhost:5000");
})