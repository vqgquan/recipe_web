import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "../component/buttonIncrease";
import Navbar from "../component/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<h1>Home</h1>}></Route>
      <Route path="/featuring" element={<h1>Featuring</h1>} />
      <Route path="/recipe" element={<h1>Recipe</h1>} />
    </Routes>
    </Router>

    
  );
}

export default App;
