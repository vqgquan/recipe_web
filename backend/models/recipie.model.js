import mongoose from "mongoose";

const recipieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Recipie = mongoose.model("Recipie", recipieSchema);

export default Recipie;