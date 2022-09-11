import React from "react";
import { Link } from "react-router-dom";
import { getDetails } from "../../Redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const RecipeDetails = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(props.match.params.id));
  }, [dispatch]);

  const recipes = useSelector((state) => state.details);

  return (
    <div>
      {recipes.lenght > 0 ? <div> 
        <h1>{recipes[0].name}</h1> 
        <img src={recipes[0].image} alt="Image not found"/>
        <p> {recipes[0].healthScore}</p>
        <p> {recipes[0].summary}</p>
        <p> {recipes[0].dishTypes}</p>
        <p> {recipes[0].steps}</p>
        </div> : <div>"Recipe not found"</div>}
        <Link to='/home'>
          <button>
            Home
          </button>
        </Link>
    </div>
  );
};

export default RecipeDetails;
