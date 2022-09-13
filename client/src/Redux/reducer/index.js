const initialState = {
  recipes: [],
  allRecipes: [],
  diets: [],
  details: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_RECIPES":
      return {
        ...state,
        recipes: action.payload,
        allRecipes: action.payload,
      };
    case "GET_RECIPES_NAME":
      return {
        ...state,
        recipes: action.payload,
      };
    case "GET_DETAILS":
      return {
        ...state,
        details: action.payload,
      };
    case "GET_DIETS": {
      return {
        ...state,
        diets: action.payload,
      };
    }
    case "CREATE_RECIPES":
      return {
        ...state,
      };
    case "FILTER_BY_DIET":
      const allRecipes = state.allRecipes;
      const filterDiet =
        action.payload === "diets"
          ? allRecipes
          : allRecipes.filter((el) => {
              return el.diets.find(e => e.name === action.payload);
            });
      return {
        ...state,
        recipes: filterDiet,
      };

    case "ORDER_BY_NAME":
      const orderByName =
        action.payload === "asc"
          ? state.recipes.sort((a, b) => {
              if (a.name === b.name) {
                return 0;
              }
              if (a.name < b.name) {
                return -1;
              }
              return 1;
            })
          : state.recipes.sort((a, b) => {
              if (a.name === b.name) {
                return 0;
              }
              if (a.name < b.name) {
                return 1;
              }
              return -1;
            });
      return {
        ...state,
        recipes: orderByName,
      };

    case "ORDER_BY_SCORE":
      const allRecipesTwo = state.recipes;
      const recipesScore =
        action.payload === "healthy"
          ? allRecipesTwo.sort((a, b) => {
              if (a.healthScore === b.healthScore) {
                return 0;
              }
              if (a.healthScore < b.healthScore) {
                return 1;
              }
              return -1;
            })
          : allRecipesTwo.sort((a, b) => {
              if (a.healthScore === b.healthScore) {
                return 0;
              }
              if (a.healthScore < b.healthScore) {
                return -1;
              }
              return 1;
            });
      return {
        ...state,
        recipes: recipesScore,
      };
    default:
      return state;
  }
}

export default rootReducer;
