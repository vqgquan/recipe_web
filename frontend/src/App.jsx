import { useState } from "react";
import "./App.css";
import Navbar from "../component/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateRecipe from "../component/CreateRecipie";
import GetAllRecipes from "../component/GetAllRecipie";
import ShowOneRecipe from "../component/ShowOneRecipe";
import NotFoundPage from "../component/Notfound";


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
      <Route path="/recipes/:id" element={<ShowOneRecipe />} />
      <Route path="/not-found" element={<NotFoundPage/>}/>
    </Routes>
    </Router>

    
  );
}

export default App;
