import { themeActionTypes } from "../actions/actionTypes";

const initialState = {
  activeTheme: "dark"
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case themeActionTypes.UPDATE_APP_THEME:
      return {
        ...state,
        activeTheme: initialState.activeTheme === "dark" ? "light" : "dark"
      };
    default:
      return initialState
  }
};

export default themeReducer;