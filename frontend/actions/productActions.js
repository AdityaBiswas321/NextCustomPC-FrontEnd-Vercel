import {
  SET_TYPE,
  SET_TAB,
  SET_APP,
  SET_C_TYPE,
} from "../constants/productConstants";

export const setType = (type) => (dispatch) => {
  try {
    dispatch({ type: SET_TYPE, payload: type });
  } catch (error) {
    res.json(error);
  }
};

export const setTab = (tab) => (dispatch) => {
  try {
    dispatch({ type: SET_TAB, payload: tab });
  } catch (error) {
    res.json(error);
  }
};

export const setApp = (app) => (dispatch) => {
  try {
    dispatch({ type: SET_APP, payload: app });
  } catch (error) {
    res.json(error);
  }
};

export const setCtype = (Ctype) => (dispatch) => {
  try {
    dispatch({ type: SET_C_TYPE, payload: Ctype });
  } catch (error) {
    res.json(error);
  }
};
