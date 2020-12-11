import { STARTING_FETCH, ADDING_DATA, ADDING_SMURF, FETCHING_ERROR } from '../actions/index';
export const initialState = {
    smurfs: [],
    isFetching: false,
    error: '',
}

export const smurfReducer = (state = initialState, action)=>{
    switch (action.type) {
        case STARTING_FETCH:
            return ({
                ...state,
                isFetching: true
            });
        case ADDING_DATA:
            return ({
                ...state,
                smurfs: action.payload,
                isFetching: false
            });
        case FETCHING_ERROR:
            return({
                ...state,
                error: action.payload
            });
        default:
            return state;
    }
}
export default smurfReducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary