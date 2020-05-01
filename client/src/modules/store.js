import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import _ from 'lodash';
import thunk from 'redux-thunk';
import authReducer from "../reducers/authReducer";
import sidebarReducer from "../reducers/sidebarReducer";


const selectedReducers = [ 'auth'];

const stateSanitizer = state => _.pick(state, selectedReducers);


const middleware = [thunk];

const composeEnhancers = composeWithDevTools({stateSanitizer});

const enhancer = composeEnhancers(applyMiddleware(...middleware ));

const reducers = combineReducers({
    auth: authReducer,
});

const store = createStore(reducers, enhancer);

export default store
