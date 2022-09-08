import React from 'react'
import styles from './Cards.module.css'

const RecipeCard = ({image, name, diets, healthScore}) => {
  return (
    <div className={styles.cardContainer}>
        <img src={image} alt='not found'/>
        <h3>{name}</h3> 
        <h5>Diets: {diets}</h5>
        <h3>Health Score: {healthScore}</h3>
    </div>
  )
}

export default RecipeCard