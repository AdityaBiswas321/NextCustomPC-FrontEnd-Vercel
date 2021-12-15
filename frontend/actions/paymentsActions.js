import axios from "axios";
import { API_URL } from "../config";
import {
  PAYMENT_REQUEST,
  PAYMENT_SUCCESS,
  PAYMENT_FAIL,
  MAKE_PAYMENT_METHOD_REQUEST,
  MAKE_PAYMENT_METHOD_SUCCESS,
  MAKE_PAYMENT_METHOD_FAIL,
  CONFIRM_PAYMENT_REQUEST,
  CONFIRM_PAYMENT_SUCCESS,
  CONFIRM_PAYMENT_FAIL,
} from "../constants/paymentConstants";

export const makePayment = (price) => async (dispatch) => {
  try {
    dispatch({ type: PAYMENT_REQUEST });
    const { data: clientSecret } = await axios.post(
      `${API_URL}/api/payment_intents`,
      {
        amount: price * 100,
      }
    );
    console.log(`makePayment Action ClientSecret:${clientSecret}`);
    dispatch({ type: PAYMENT_SUCCESS, payload: clientSecret });
  } catch (error) {
    dispatch({ type: PAYMENT_FAIL, payload: error.response });
  }
};

export const createPaymentMethod =
  (cardElement, billingDetails, stripe) => async (dispatch) => {
    try {
      dispatch({ type: MAKE_PAYMENT_METHOD_REQUEST });
      const paymentMethodReq = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: billingDetails,
      });
      console.log(`createPaymentMethod Action: ${paymentMethodReq}`);

      dispatch({
        type: MAKE_PAYMENT_METHOD_SUCCESS,
        payload: paymentMethodReq,
      });
    } catch (error) {
      dispatch({ type: MAKE_PAYMENT_METHOD_FAIL, payload: error.response });
    }
  };

export const createConfirmCardPayment =
  (clientSecret, paymentMethodReq, stripe) => async (dispatch) => {
    try {
      dispatch({ type: CONFIRM_PAYMENT_REQUEST });
      console.log("action paymentmethod");
      console.log(paymentMethodReq);
      const confirmCardPayment = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethodReq.paymentMethod.id,
      });
      console.log("CONFIRM CARD PAYMENT");
      console.log(confirmCardPayment);
      dispatch({ type: CONFIRM_PAYMENT_SUCCESS, payload: confirmCardPayment });
    } catch (confirmCardPayment) {
      dispatch({ type: CONFIRM_PAYMENT_FAIL, payload: confirmCardPayment });
    }
  };
