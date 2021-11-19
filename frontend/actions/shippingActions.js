import axios from "axios";
import { API_URL } from "../config/index";
import {
  SHIPPING_REQUEST,
  SHIPPING_SUCCESS,
  SHIPPING_FAIL,
  SHIPPING_RESET,
} from "../constants/shippingConstants";

export const shipping = (user) => async (dispatch) => {
  try {
    dispatch({ type: SHIPPING_REQUEST });
    const { data } = await axios.post(`${API_URL}/api/ship`, user);
    console.log(data);
    dispatch({ type: SHIPPING_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: SHIPPING_FAIL, payload: error.response });
  }
};
