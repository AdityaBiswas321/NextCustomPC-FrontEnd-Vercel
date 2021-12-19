import {
  SET_TYPE,
  SET_TAB,
  SET_APP,
  SET_C_TYPE,
} from "../constants/productConstants";

//Stores information later used by the algorithm to determine PC
export const productReducers = (state = {}, action) => {
  switch (action.type) {
    case SET_TYPE:
      return { ...state, type: action.payload };
    case SET_TAB:
      return { ...state, tab: action.payload };
    case SET_APP:
      return { ...state, app: action.payload };
    case SET_C_TYPE:
      return { ...state, ctype: action.payload };
    default:
      return state;
  }
};
