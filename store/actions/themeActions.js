import { themeActionTypes } from "./actionTypes";

export const updateAppTheme = () => {
  return (dispatch, getState) => {
    dispatch({
      type: themeActionTypes.UPDATE_APP_THEME
    })
  }
};