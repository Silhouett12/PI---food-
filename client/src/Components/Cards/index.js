import React from 'react'
import styles from './Cards.module.css'
import { Link } from 'react-router-dom'

const RecipeCard = ({id, image, name, diets, healthScore}) => {


  return (
    <div className={styles.cardContainer}>
        <Link to={`/home/${id}`} className={styles.link}><img src={image} alt='not found'/></Link>
        <div className={styles.name}>{name}</div> 
        <div className={styles.diets}>Diets: {diets}</div>
        <div className={styles.hs}>Health Score: {healthScore}</div>
    </div>
  )
}

export default RecipeCard