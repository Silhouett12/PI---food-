import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Components/Home";
import FirstPage from "./Components/FirstPage";
import RecipeDetails from "./Components/RecipeDetails";
import RecipeCreator from "./Components/RecipeCreator";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FirstPage/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/home/:recipeId" element={<RecipeDetails/>} />
        <Route path="/create" element={<RecipeCreator/>} />
      </Routes>
    </>
  );
}

export default App;
