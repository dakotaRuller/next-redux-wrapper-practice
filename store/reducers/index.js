//Node Modules
import { combineReducers } from "redux";
import {HYDRATE} from 'next-redux-wrapper';

//Reducers
import themeReducer from "./themeReducer";

const combinedReducer = combineReducers({
  theme: themeReducer,
});

// const setRecuder = (state, action) => {
//   if(action.type === HYDRATE) {
//     const nextState = {
//       ...state,
//       ...action.payload,
//     }
//     if (state.theme) nextState.theme = state.theme
//     return nextState
//   } else {
//     return combinedReducer(state, action)
//   }
// }

// const hydrateReducer = (state = {}, action) => {
//   switch (action.type) {
//     case HYDRATE:
//       return {...state, ...action.payload};
//     default:
//       return state;
//   }
// };

const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };

    if (state.theme) nextState.theme = state.theme;
    return nextState
  } else {
    return combinedReducer(state, action)
  }
};



export default rootReducer;
