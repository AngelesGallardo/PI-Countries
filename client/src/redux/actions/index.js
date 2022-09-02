import axios from 'axios';
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_COUNTRIES_BY_NAME = 'GET_COUNTRIES_BY_NAME';
export const GET_DETAIL_BY_ID = 'GET_DETAIL_BY_ID';
export const CLEAN_COUNTRY = 'CLEAN_COUNTRY';
export const FILTER_BY_CONTINENTS = 'FILTER_BY_CONTINENTS';
export const FILTER_BY_ACTIVITIES = 'FILTER_BY_ACTIVITIES';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_POPULATION = 'ORDER_BY_POPULATION';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';



 export const getAllCountries = () => {
    try {
        return async (dispatch) => {
            const json = await axios('http://localhost:3001/countries');
            return dispatch({type: GET_ALL_COUNTRIES, payload: json.data})
        }
    } catch (error) {
        console.log(error)
    }
    
}

export const getCountriesByName = (name) =>{
    try {
        return async (dispatch) => {
            const json = await axios(`http://localhost:3001/countries?name=${name}`)
            return dispatch({type: GET_COUNTRIES_BY_NAME, payload: json.data})
        }
    } catch (error) {
        console.log(error) 
    }
    
}

export const getDetailById = (id) => {
    try {
        return async (dispatch) => {
            const json = await axios(`http://localhost:3001/countries/${id}`);
            return dispatch({type: GET_DETAIL_BY_ID, payload: json.data})
        }
    } catch (error) {
        console.log(error)
    }
    
}

export const cleanCountry = () => {
    return ({type: CLEAN_COUNTRY, payload: []})
}

export const postActivity = (activity) => { 
    return async (dispatch) =>{
        const json = await axios.post('http://localhost:3001/activities', activity)
        return dispatch({type: CREATE_ACTIVITY})
    }   
}

export const getActivities = () => { 
    try {
        return async (dispatch) =>{
            const json = await axios('http://localhost:3001/activities')
            return dispatch({type: GET_ACTIVITIES, payload: json.data})
        } 
    } catch (error) {
        console.log(error)
    }  
}

export const filterByContinents = (payload) => {
    return({type: FILTER_BY_CONTINENTS, payload})
}

export const filterByActivities = (payload) => {
    return({type: FILTER_BY_ACTIVITIES, payload})  
}

export const orderByName = (payload) => {
    return({type: ORDER_BY_NAME, payload})
}

export const orderByPopulation = (payload) => {
    return({type: ORDER_BY_POPULATION, payload})
}