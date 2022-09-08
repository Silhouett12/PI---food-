import React from 'react';
import {useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getRecipes, orderByScore, filterByDiet } from '../../Redux/actions';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'
import RecipeCard from '../Cards';
import Pages from '../Pages';


const Home = () => {

  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes)

  const [currentPage, setCurrentPage] = React.useState(1)
  const [recipesPerPage, setrecipesPerPage] = React.useState(9)
  const indexOfLastRecipe = currentPage * recipesPerPage
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
  const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)

  const pages = (pageNumber) => {
    setCurrentPage(pageNumber)
  }


  useEffect(() => {
    dispatch(getRecipes())
  },[])

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getRecipes());
  }

  const handleOrderByScore = (e) => {
    dispatch(orderByScore(e.target.value))
  }
  const handleFilterByDiet = (e) => {
    dispatch(filterByDiet(e.target.value))
  }
  return (
    <>
      <Link to='/recipes'>Create Recipe</Link>
      <h1 className={styles.title}>TITULO</h1>
      <button onClick={handleClick}>CARGAR TODO</button>
    <div>
    <select onChange={handleFilterByDiet}>
          <option value='diets'>Type of diet</option>
          <option value='vegan'>Vegan</option>
          <option value='lacto ovo vegetarian'>Vegetarian</option>
          <option value='dairy free'>Dairy free</option>
          <option value='gluten free'>Gluten free</option>
      </select>
      <select>
          <option value='asc'>A-Z</option>
          <option value='desc'>Z-A</option>
      </select>
      <select onChange={handleOrderByScore}>
          <option value='healthy'>healthy</option>
          <option value='unhealthy'>unhealthy</option>
      </select>
      <Pages 
      recipesPerPage={recipesPerPage} 
      allRecipes={allRecipes.length}
      pages={pages}
      />
      <div className={styles.cards}> {
      currentRecipes?.map((el) => {
         return <RecipeCard image={el.image} name={el.name} diets={el.diets} healthScore= {el.healthScore}/>
        })
}</div>
     
    </div>
    </>
  )
}

export default Home