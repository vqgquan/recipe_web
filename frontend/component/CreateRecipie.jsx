import React, { useState } from "react";
import axios from "axios";

const CreateRecipe = () => {
  // State for form fields
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // Declare success message state

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Form the new recipe data from the state values
    const recipeData = { name, description, image };

    try {
      // Send a POST request to the backend
      const response = await axios.post(
        "http://localhost:5000/api/recipes",
        recipeData
      );
      setSuccessMessage("Recipe successfully created!");
      // Clear the form fields after submission
      setName("");
      setDescription("");
      setImage("");
      console.log("Recipe created:", response.data);
    } catch (error) {
      console.error("Error creating recipe:", error.message);
      setSuccessMessage("Failed to create recipe. Please try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-6 bg-white shadow rounded-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Create a New Recipe</h1>
      {successMessage && (
        <p
          className={`mb-4 text-center ${
            successMessage.includes("successfully")
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {successMessage}
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Recipe Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 text-gray-700 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full px-4 py-2 text-gray-700 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Image
          </label>
          <textarea
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            className="w-full px-4 py-2 text-gray-700 border rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;
