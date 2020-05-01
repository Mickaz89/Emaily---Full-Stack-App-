import axios from "axios";
import {LOADING_FETCH_USER, FETCH_USER, OPEN_SIDEBAR } from "./types";

export const fetchUser = () => async dispatch => {

  dispatch({ type: LOADING_FETCH_USER });

  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const openSidebar = () => ({
  type: OPEN_SIDEBAR
});
