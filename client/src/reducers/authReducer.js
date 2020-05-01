import {FETCH_USER,LOADING_FETCH_USER} from "../actions/types";

const initialState = {
  loading: false
};

export default function(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case LOADING_FETCH_USER:
      console.log('LOADING_FETCH_USER');
      return {...state, loading:true}
    case FETCH_USER:
      console.log("FETCHED USER ", action.payload);
      return action.payload || false;
    default:
      return state;
  }
}
