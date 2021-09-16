import {
  PAYMENT_REQUEST,
  PAYMENT_SUCCESS,
  PAYMENT_FAIL,
} from "../constants/paymentConstants";

export const paymentsReducer = (state = {}, action) => {
  switch (action.type) {
    case PAYMENT_REQUEST:
      return { loading: true };
    case PAYMENT_SUCCESS:
      return { loading: false, success: true, payment: action.payload };
    case PAYMENT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
