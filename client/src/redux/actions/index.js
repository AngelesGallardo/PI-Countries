import axios from 'axios';

export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_DETAIL_BY_ID = 'GET_DETAIL_BY_ID';
export const GET_DETAIL_BY_NAME = 'GET_DETAIL_BY_NAME';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';

export const getAllCountries = () => {
    return async (dispatch) => {
        const json = await axios('http://localhost:3001/countries');
        return dispatch({type: GET_ALL_COUNTRIES, payload: json.data})
    }
}

export const getDetailById = (id) => {
    return async (dispatch) => {
        const json = await axios(`http://localhost:3001/countries/${id}`);
        return dispatch({type: GET_DETAIL_BY_ID, payload: json.data})
    }
}

export const getDetailByName = (name) => {
    return async (dispatch) => {
        const json = await axios(`http://localhost:3001/countries?name=${name}`);
        return dispatch({type: GET_DETAIL_BY_NAME, payload: json.data})
    }
}

export const postActivity = (activity) => {    
    return ({type: CREATE_ACTIVITY, payload: {...activity}})
}
