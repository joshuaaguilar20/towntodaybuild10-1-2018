import axios from 'axios';
import { FETCH_USER } from './types';


//action CREATOR FOR REDUX thunk allows for you to use Custom dispatch function


 export const fetchUser = () =>  async dispatch => {
       const res = await axios.get('/api/current_user');
        dispatch({type:FETCH_USER , payload:res.data });
    };
