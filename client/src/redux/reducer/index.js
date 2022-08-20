import { GET_ALL_COUNTRIES, GET_DETAIL_BY_ID, GET_DETAIL_BY_NAME, CREATE_ACTIVITY } from '../actions/index.js'

const initialState = {
    countries: [],
    detail: [],
    activities : []
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type){
        
        case GET_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }        
        case GET_DETAIL_BY_ID:
            return {
                ...state,
                detail: action.payload
            }
        case GET_DETAIL_BY_NAME:
            return {
                ...state,
                detail: action.payload
            }    
        case CREATE_ACTIVITY:
            return {
                ...state,
                activities: [...state.activities, action.payload]
            } 
        default: 
            return {
                ...state
            }
    }}

    export default reducer;