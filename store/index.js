//Node Modules
import {createStore, applyMiddleware} from 'redux';
import {createWrapper} from 'next-redux-wrapper';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

// create a makeStore function
const state = {};
const initializeStore = context => createStore(rootReducer, state, composeWithDevTools(applyMiddleware(thunk)));

// export an assembled wrapper
const wrapper = createWrapper(initializeStore, {debug: true});

export default wrapper;