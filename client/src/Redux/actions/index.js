import axios from 'axios';


// CONEXION ENTRE FRONT Y BACK

export function getRecipes() {
    return async function(dispatch) {
        try {
            const json = await axios.get('http://localhost:3001/recipes', {});
            return dispatch({
                type: 'GET_RECIPES',
                payload: json.data,
            }) 
        } catch (error) {
            alert('You reached the daily request limit. try tomorrow')
        }
       
    }
}


export function getDetails(id) {
    return async function(dispatch) {
        try {
            const json = await axios.get('http://localhost:3001/recipes/' + id);
            return dispatch({
                type: 'GET_DETAILS',
                payload: json.data,
            });
        } catch (error) {
            alert('Recipe not found')
        }  
    }
}


export function getRecipesName(name) {
    return async function(dispatch) {
        try {
            const json = await axios.get('http://localhost:3001/recipes?name=' + name);
            return dispatch({
                type: 'GET_RECIPES_NAME',
                payload: json.data,
            });

        } catch (error) {
            alert('Recipes not found')
        }
    }
}

export function getDiets() {
    try {
        return async function(dispatch) {
            const json = await axios.get('http://localhost:3001/diets', {});
            return dispatch({
                type: 'GET_DIETS',
                payload: json.data,
            })
        }
    } 
    catch (error) {
        alert('You reached the daily request limit. try tomorrow')
    }
    
}

export function createRecipe(payload) {
    return async function(dispatch) {
        const json = await axios.post('http://localhost:3001/recipes', payload);
        return json
    }
}

export function filterByDiet(payload) {
    return {
        type: 'FILTER_BY_DIET',
        payload
    }
}

export function orderByScore(payload){
    return{
        type: 'ORDER_BY_SCORE',
        payload
    }
}

export function orderByName(payload){
    return{
        type: 'ORDER_BY_NAME',
        payload
    }
}

