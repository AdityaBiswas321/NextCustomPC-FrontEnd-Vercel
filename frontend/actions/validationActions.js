import axios from "axios";
import { API_URL } from "../config/index";
import {
  VALIDATION_REQUEST,
  VALIDATION_SUCCESS,
  VALIDATION_FAIL,
  VALIDATION_RESET,
} from "../constants/validationConstants";

export const validate = (id) => async (dispatch) => {
  try {
    dispatch({ type: VALIDATION_REQUEST });
    const { data } = await axios.post(`${API_URL}/api/ship/validate`, id);
    console.log("redux validation data");
    console.log(data);
    dispatch({ type: VALIDATION_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: VALIDATION_FAIL, payload: error.response });
  }
};
