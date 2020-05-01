import "materialize-css/dist/css/materialize.min.css";
import 'semantic-ui-less/semantic.less';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reducers from './reducers';
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./App";
import axios from 'axios';
import AppRouter from "./modules/routes/AppRouter";
import {BrowserRouter} from "react-router-dom";

window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}><App /></Provider>
    </BrowserRouter>,
    document.querySelector("#root"));

console.log("STRIPE KEY IS", process.env.REACT_APP_STRIPE_KEY);
console.log("Environment is", process.env.NODE_ENV);
