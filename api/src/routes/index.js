require("dotenv").config();
const KEY = process.env.API_KEY;
const KEY2 = process.env.API_DIET_KEY;
const { Diet, Recipe } = require("../db");
const { Router } = require("express");
const axios = require("axios");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);




const getApiInfo = async () => {
  try {
    const apiUrl = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${KEY}&addRecipeInformation=true&number=100`
    );
    const apiInfo = apiUrl.data.results.map((e) => {
      return {
        name: e.title,
        vegetarian: e.vegetarian,
        vegan: e.vegan,
        glutenFree: e.glutenFree,
        dairyFree: e.dairyFree,
        image: e.image,
        apiId: e.id,
        healthScore: e.healthScore,
        diets: e.diets.map((element) => element),
        summary: e.summary,
        steps: e.analyzedInstructions
          .map((instruction) => {
            return instruction.steps.map((step) => step.step);
          })
          .flat(),
      };
    });
    return apiInfo;
  } catch (error) {
    return error;
  }
};

const getDBinfo = async () => {
  return await Recipe.findAll({
    include: {
      model: Diet,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllRecipes = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDBinfo();
  const totalInfo = apiInfo.concat(dbInfo);
  return totalInfo;
};

router.get("/recipes", async (req, res) => {
  const name = req.query.name;
  let recipesTotal = await getAllRecipes();
  if (name) {
    let recipeName = recipesTotal.filter((el) =>
      el.name.toLowerCase().includes(name.toLowerCase())
    );
    if (recipeName.length){
      return res.status(200).send(recipeName)
  } else {
      return res.status(404).send({error: 'The dog is at the park'})
  }} 
   else {
    return res.status(200).json(recipesTotal);
   }});

router.get("/recipes/:id", async (req, res) => {
  const { id } = req.params;
  const dbInfo = await getDBinfo();
  try {
    if (id < 100) {
      const result = dbInfo.filter((recipe) => (recipe.id = id));
      res.status(200).json(result);
    } else {
      const apiUrl = await axios.get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${KEY}&includeNutrition=false`
      );
      const apiRecipes = apiUrl.data;
      const apiRecipeId = {
        id: apiRecipes.id,
        name: apiRecipes.title,
        image: apiRecipes.image,
        healthScore: apiRecipes.healthScore,
        summary: apiRecipes.summary,
        diets: apiRecipes.diets.map((diet) => diet),
        dishTypes: apiRecipes.dishTypes.map((dish) => dish),
        steps: apiRecipes.analyzedInstructions
          .map((instruction) => {
            return instruction.steps.map((step) => step.step);
          })
          .flat(),
      };
      res.status(200).json(apiRecipeId);
    }
  } catch (err) {
    res.status(404).send(err.message);
  }
});

router.post("/recipes", async (req, res) => {
  let {
    id,
    name,
    summary,
    healthScore,
    image,
    steps,
    diets,
    createdInDb,  
  } = req.body;
  let recipeCreated = await Recipe.create({
    id,
    name,
    summary,
    healthScore,
    image,
    steps,
    createdInDb,
  })
  let dietDb = await Diet.findAll({
    where: {name: diets}
  })
  recipeCreated.addDiet(dietDb)
  res.status(200).json("Recipe created")
});

router.get("/diets", async (req, res) => {

const dietApi = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${KEY2}&addRecipeInformation=true&number=100`
  );
const dietInfo = dietApi.data.results.map(e => e.diets)
const diets = [];
dietInfo.map(el => {
  for (let i=0; i<el.length; i++) {
     diets.push(el[i]) 
     }})

diets.forEach(e => {
    Diet.findOrCreate({
        where: {name : e}
    })
})
const allDiets = await Diet.findAll();
res.send(allDiets)
});

module.exports = router;
