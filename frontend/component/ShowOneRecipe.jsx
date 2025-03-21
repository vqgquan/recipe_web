import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ShowOneRecipe = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()


  useEffect(() => {
    const fetchOneRecipe = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/recipes/${id}`
        );
        setRecipe(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipes:", error.message);
        setLoading(false);
      }
    };
    fetchOneRecipe();
  }, [id]);

  const handleDelete = async  () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
        try {
            await axios.delete(`http://localhost:5000/api/recipes/${id}`);
            alert("Recipe delete successfully");
            navigate('/recipes');
        } catch (error) {
            console.error("Error deleting recipes:", error.message);
        }
    }
  }


  if (loading) {
    return (
      <div className="text-center my-10 text-gray-600">
        <p>Loading recipe...</p>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="text-center my-10 text-gray-600">
        <p>Recipe not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto my-10 p-6 bg-white shadow rounded-md">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">{recipe.name}</h1>
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-60 object-cover rounded mb-6"
      />
      <p className="text-gray-600">{recipe.description}</p>
      <button onClick={handleDelete} className="btn btn-soft btn-secondary">Delete recipe</button>
    </div>
  );
};

export default ShowOneRecipe;