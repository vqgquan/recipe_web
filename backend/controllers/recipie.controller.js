import Recipie from '../models/recipie.model.js';
import mongoose from 'mongoose';

export const getAllRecipie =  async (req, res) => {
    try {
        const recipies = await Recipie.find({});
        res.status(200).json({success:true, data: recipies});
    } catch (error) {
        console.log("Error in fetching recipies: ", error.message);
        res.status(500).json({success:false, message: "Server error"})
    }
}

export const getOneRecipie = async (req, res) => {
    let idFind = req.params.id;
    
    try {
        let foundRecipie = await Recipie.findById(idFind);
        res.status(200).json({success:true, data: foundRecipie});
    } catch (error) {
        console.log("Error in fetching recipies: ", error.message);
        res.status(500).json({success:false, message: "Server error"})
    }

}

export const createRecipie =  async (req,res) => {
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
}

export const changeRecipie = async (req, res) => {
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
}

export const deleteRecipie = async (req,res) => {
    const {id} = req.params;
    console.log("id: ", id);

    try {
        await Recipie.findByIdAndDelete(id);
        res.status(300).json({success:true, message: "Product deleted"})
    } catch (error) {
        res.status(404).json({success:false, message: "Product not found"})
    }
}