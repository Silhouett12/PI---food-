import axios from 'axios';


// CONEXION ENTRE FRONT Y BACK

export function getRecipes() {
    return async function(dispatch) {
        const json = await axios.get('http://localhost:3001/recipes', {});
        return dispatch({
            type: 'GET_RECIPES',
            payload: json.data,
        }) 

    }
}

export function filterByDiet(payload) {
    return {
        type: 'FILTER_BY_DIET',
        payload: payload
    }
}

export function orderByScore(payload){
    return{
        type: 'ORDER_BY_SCORE',
        payload: payload
    }
}

export function orderByName(payload){
    return{
        type: 'ORDER_BY_NAME',
        payload: payload
    }
}