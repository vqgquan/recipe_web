import React, { useState, useEffect } from "react";
import axios from "axios";

const DisplayRecipes = () => {
  const [recipes, setRecipes] = useState([]); // State to store recipes
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/recipes"); // Replace with your API URL
        setRecipes(response.data.data); // Assuming the API response has a 'data' field
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching recipes:", error.message);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []); // Empty dependency array to run only once on component mount

  return (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white shadow rounded-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Recipe List</h1>
      {loading ? (
        <p className="text-center text-gray-600">Loading recipes...</p>
      ) : recipes.length === 0 ? (
        <p className="text-center text-gray-600">No recipes found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe._id}
              className="p-4 border rounded shadow hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-bold text-gray-800">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.description}</p>
              {recipe.image && (
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="mt-4 w-full h-40 object-cover rounded"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayRecipes;
