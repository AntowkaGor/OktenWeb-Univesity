import {
    ON_USERS_LOADED,
    ON_ADD_TO_DELATE,
    ON_REMOVE_FROME_DELATE,
} from '../action-types'


const initialState = {
    users: [],
    badEmployees: [],
}

 export const reducer = (state = initialState, action) =>{
    switch (action.type){
        case ON_USERS_LOADED:{
            return{
                ...state,
                users: action.payload
            }
        }

        case ON_ADD_TO_DELATE:{
            return{
                ...state,
                badEmployees: [...state.badEmployees, action.payload]
            }
        }

        case ON_REMOVE_FROME_DELATE:{
            return{
                ...state,
                badEmployees: state.badEmployees.filter(el => el !== action.payload)
            }
        }

        default:
          return state;
    }
}

export default reducer
