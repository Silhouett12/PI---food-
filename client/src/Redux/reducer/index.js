const initialState = {
  recipes: [],
  allRecipes: [],
};

function rootReducer(state = initialState, action) {
    
  switch (action.type) {
    
    case "GET_RECIPES":
        
      return {
        ...state,
        recipes: action.payload,
        allRecipes: action.payload
      };

    case 'FILTER_BY_DIET':
    const allRecipes = state.allRecipes
    const filterDiet = action.payload === 'diets' ? allRecipes : allRecipes.filter((el) => {return (el.diets.includes(action.payload))})
    console.log(filterDiet)
        return {
            ...state,
            recipes: filterDiet,
        }
      

    case "ORDER_BY_SCORE":
        const allRecipesTwo = state.allRecipes
      const recipesScore =
        action.payload === "healthy" ? allRecipesTwo.sort((a, b) => {return b.healthScore - a.healthScore}) : allRecipesTwo.sort((a, b) => {return a.healthScore - b.healthScore});
      console.log(recipesScore)
        return {
        ...state,
        recipes: recipesScore,
      };
    default:
      return state;
  }
}

export default rootReducer;
