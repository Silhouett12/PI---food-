import React from 'react';
import {useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getRecipes } from '../../Redux/actions';
import { Link } from 'react-router-dom';

const Home = () => {

  const dispatch = useDispatch();
  // const allRecipes = useSelector((state)=> state.recipes)

  useEffect(() => {dispatch(getRecipes())}, []);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getRecipes());
  }

  return (
    <>
      <Link to='/recipes'>Create Recipe</Link>
      <h1>TITULO</h1>
      <button onClick={handleClick}>CARGAR TODO</button>
    <div>
    <select>
          <option value='diet'>Tipo de dieta</option>
    
      </select>
      <select>
          <option value='asc'>Ascendente</option>
          <option value='desc'>Descendente</option>
      </select>
      <select>
          <option value='healthy'>healthy</option>
          <option value='unhealthy'>unhealthy</option>
      </select>
    </div>
    </>
  )
}

export default Home