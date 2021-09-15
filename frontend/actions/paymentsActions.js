import axios from "axios";
import { API_URL } from "../config";
import {
  PAYMENT_REQUEST,
  PAYMENT_SUCCESS,
  PAYMENT_FAIL,
} from "../constants/paymentConstants";

export const makePayment = (price) => async (dispatch) => {
  try {
    dispatch({ type: PAYMENT_REQUEST });
    const { data: clientSecret } = await axios.post(
      `http://localhost:5000/api/payment_intents`,
      {
        amount: price * 100,
      }
    );
    console.log(clientSecret);
    dispatch({ type: PAYMENT_SUCCESS, payload: clientSecret });
  } catch (error) {
    dispatch({ type: PAYMENT_FAIL, payload: error.response });
  }
};
