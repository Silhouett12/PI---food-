import React from "react";
import {useParams} from "react-router-dom";
import { getDetails } from "../../Redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './RecipeDetails.module.css'

const RecipeDetails = (props) => {
  const dispatch = useDispatch();
  const {id} = useParams();


  useEffect(() => {
    dispatch(getDetails(id));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  console.log(getDetails(id))
  const recipes = useSelector((state) => state.details);
  console.log(recipes)
  return (
    <div>
      {recipes? <div className={styles.mainDiv}> 
        <div className={styles.name}>"<b>{recipes.name}</b>"</div> 
        <div className={styles.image}> <img src={recipes.image} alt="Not found" /> 
        <div className={styles.score}> |Health Score| <br/> '{recipes.healthScore}'<br/> |Dish type| <br/>'{recipes.dishTypes}'</div></div>
        
        <div className={styles.summary}><p dangerouslySetInnerHTML={{ __html: recipes.summary }}></p></div>
      
        <div className={styles.steps}> <div className={styles.title}> <b>Steps:</b></div> <br/>{recipes.steps}</div>
        </div> : <div>"Recipe not found"</div>}
        
    </div>
  );
};


export default RecipeDetails;
