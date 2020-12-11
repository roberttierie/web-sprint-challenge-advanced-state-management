import axios from 'axios';

export const STARTING_FETCH = 'STARTING_FETCH';
export const FETCHING_ERROR = "FETCHING_ERROR"
export const ADDING_DATA = "ADDING_DATA";
export const ADDING_SMURF = "ADDING_SMURF";



export const addSmurf = (yoursmurf) => dispatch => 
{
    axios
    .post('http://localhost:3333/smurfs/', yoursmurf)
    .then(response => {
        dispatch({ADDING_SMURF, payload:yoursmurf})
    })
    .catch(error => {})
}
export const fetchingSmurf = () => dispatch =>
{
    dispatch({type:STARTING_FETCH});
    axios.get('http://localhost:3333/smurfs/')
        .then(response=>{
            dispatch({type:ADDING_DATA, payload: response.data})
        })
        .catch(error => {
            dispatch({type:FETCHING_ERROR, payload:error.response.statusText})
        })
}



//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.