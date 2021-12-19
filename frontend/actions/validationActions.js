import axios from "axios";
import { API_URL } from "../config/index";
import {
  VALIDATION_REQUEST,
  VALIDATION_SUCCESS,
  VALIDATION_FAIL,
  VALIDATION_RESET,
} from "../constants/validationConstants";

//Very Important

//Validation API to validate shipping data based on its id from shippo servers

//If address is writted incorrectly validaton api indicate as success: false in return object

//Since incorrect address will still pass into shippo api to obtain stock shipping data, validation is necessary

//100% accuracy

//Axios post
//Response: Validation data, true or false
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
