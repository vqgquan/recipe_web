import { useState } from "react";
import "./App.css";
import Navbar from "../component/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateRecipe from "../component/CreateRecipie";
import GetAllRecipes from "../component/GetAllRecipie";


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<h1>Home</h1>}></Route>
      <Route path="/featuring" element={<h1>Featuring</h1>} />
      <Route path="/recipes" element={<GetAllRecipes/>} />
      <Route path="/create-recipe" element={<CreateRecipe />} />
    </Routes>
    </Router>

    
  );
}

export default App;
