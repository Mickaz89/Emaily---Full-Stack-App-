import { combineReducers } from 'redux';
import {reducer as reduxForm} from "redux-form";
import authReducer from './authReducer';
import modalReducer from "./modalReducer";


export default combineReducers({
    auth: authReducer,
    form: reduxForm,
    modal :modalReducer
});