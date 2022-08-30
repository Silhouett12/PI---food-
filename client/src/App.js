import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import FirstPage from "./Components/FirstPage";
import RecipeDetails from "./Components/RecipeDetails";
import RecipeCreator from "./Components/RecipeCreator";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<FirstPage/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Home/:recipeId" element={<RecipeDetails/>} />
        <Route path="/Create" element={<RecipeCreator/>} />
      </Routes>
    </>
  );
}

export default App;
