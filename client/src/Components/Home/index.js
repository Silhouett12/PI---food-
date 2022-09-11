import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRecipes,
  orderByScore,
  filterByDiet,
  orderByName,
} from "../../Redux/actions";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import RecipeCard from "../Cards";
import Pages from "../Pages";
import Navbar from "../Navbar/index";
import SearchBar from "../SearchBar";

const Home = () => {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);

  const [currentPage, setCurrentPage] = React.useState(1);
  const [recipesPerPage, setrecipesPerPage] = React.useState(9);
  const [render, setRender] = React.useState("");
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = allRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  const refreshPage = () => {
    window.location.reload(false);
  };

  const pages = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getRecipes());
  }, []);

  const handleOrderByName = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setRender(`Ordenado ${e.target.value}`);
  };

  const handleOrderByScore = (e) => {
    e.preventDefault();
    dispatch(orderByScore(e.target.value));
    setCurrentPage(1);
    setRender(`Ordenado ${e.target.value}`);
  };
  const handleFilterByDiet = (e) => {
    dispatch(filterByDiet(e.target.value));
  };
  return (
    <>
      <Navbar />
      <div className={styles.mainDiv}>
        <div className={styles.firstContainer}>
          <h1 className={styles.title}>Welcome to my food API! :D</h1>
          
        </div>
        <div className={styles.secondContainer}>
          <div className={styles.filterContainer}>
            <div className={styles.filterTitle}>Order by:</div>
          <select onChange={handleFilterByDiet}>
            <option value="diets">Diet</option>
            <option value="vegan">Vegan</option>
            <option value="lacto ovo vegetarian">Vegetarian</option>
            <option value="dairy free">Dairy free</option>
            <option value="gluten free">Gluten free</option>
          </select>
          <select onChange={handleOrderByName}>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
          <select onChange={handleOrderByScore}>
            <option value="healthy">healthy</option>
            <option value="unhealthy">unhealthy</option>
          </select>
          </div>
          <div className={styles.searchBarContainer}>
          <SearchBar />
          </div>
          <button className={styles.button}>
            <Link to="/create" className={styles.linkCreate}>
              Create Recipe
            </Link>
          </button>
          </div>
          <div className={styles.thirdContainer}>
          <Pages
            recipesPerPage={recipesPerPage}
            allRecipes={allRecipes.length}
            pages={pages}
          />
          </div>
          <div className={styles.cards}>
            {currentRecipes?.map((el) => {
              return (
                <>
                  <RecipeCard
                    image={el.image}
                    name={el.name}
                    diets={el.diets.map((el) => el.name?.concat(" | "))}
                    healthScore={el.healthScore}
                  />
                  <Link to={`/recipes/${el.id}`}>Check {el.name}</Link>
                </>
              );
            })}
          </div>
      </div>
    </>
  );
};

export default Home;
