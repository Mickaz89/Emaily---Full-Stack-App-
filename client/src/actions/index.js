import axios from "axios";
import {openSuccessNotification} from "../modules/notifications/notifications";
import {history} from "../modules/routes/history";
import {LOADING_FETCH_USER, FETCH_USER, CLOSE_MODAL, OPEN_MODAL, FETCH_SURVEYS,LOGIN } from "./types";

export const fetchUser = () => async dispatch => {

  dispatch({ type: LOADING_FETCH_USER });

  const res = await axios.get("/api/admin/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const login = (values) => async dispatch => {
  console.log('POST LOGIN values ' , values);
  const res = await axios.post('/api/admin/login', values);
  dispatch({ type: LOGIN, payload: res.data });


};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const openModal = () => ({
  type: OPEN_MODAL
});
export const closeModal = () => ({
  type: CLOSE_MODAL
});

export const submitSurvey = (values) => async dispatch => {
  console.log('POST SURVEY ACTION ');
  console.log('POST SURVEY values ' , values);
  console.log('POST SURVEY history ' , history);
  const res = await axios.post('/api/surveys', values);
  dispatch({ type: CLOSE_MODAL});
  openSuccessNotification(`Saved`, `open${Date.now()}`);
  dispatch({ type: FETCH_USER, payload: res.data });


};

export const fetchSurveys = () => async dispatch => {
  const res = await  axios.get('/api/surveys');

  dispatch({type : FETCH_SURVEYS, payload : res.data})
}