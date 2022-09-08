import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import {createRecipe, getDiets} from '../../Redux/actions'

const RecipeCreator = () => {

  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  const [input, setInput] = useState({
    name: '',
    summary: '',
    healthScore: '',
    steps: '',
    diets: [],
  })

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value})
  }

  const handleSelect = (e) => {
    setInput(
      {
        ...input,
        diets: [...input.diets, e.target.value]
      }
    )
  }

  useEffect(() => {
    dispatch(getDiets())}, [])

  return (
    <>
     <Link to='/home'>
      <button>Back to Home</button>
     </Link>
     <h1>Create a recipe</h1>
     <form>
        <div>
          <label>Name:</label>
          <input type='text' value={input.name} name='name' onChange={handleChange}/>
        </div>
        <div>
          <label>Summary:</label>
          <input type='text' value={input.summary} name='summary' onChange={handleChange}/>
        </div>
        <div>
          <label>HealthScore:</label>
          <input type='text' value={input.healthScore} name='healthScore' onChange={handleChange}/>
        </div>
        <div>
          <label>Image:</label>
          <input type='text' value={input.image} name='image' onChange={handleChange}/>
        </div>
        <div>
          <label>Steps:</label>
          <input type='text' value={input.steps} name='steps' onChange={handleChange}/>
        </div>
        <select onChange={handleSelect}>
          {diets.map((el) => (
            <option value={el.name}>{el.name}</option>
          ))}
        </select>
        <ul><li>{input.diets.map(el => el + ' ,')}</li></ul>
        <button type='submit'>Create Recipe :D</button>
     </form>
    </>
  )
}

export default RecipeCreator