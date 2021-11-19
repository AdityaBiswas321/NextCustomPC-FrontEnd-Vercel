import {
  VALIDATION_REQUEST,
  VALIDATION_SUCCESS,
  VALIDATION_FAIL,
  VALIDATION_RESET,
} from "../constants/validationConstants";

export const validationReducer = (state = {}, action) => {
  switch (action.type) {
    case VALIDATION_REQUEST:
      return { loading: true };
    case VALIDATION_SUCCESS:
      return { loading: false, success: true, data: action.payload };
    case VALIDATION_FAIL:
      return { loading: false, error: action.payload };
    case VALIDATION_RESET:
      return {};
    default:
      return state;
  }
};
