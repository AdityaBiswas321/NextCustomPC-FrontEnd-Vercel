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
  CONFIRM_PAYMENT_RESET,
} from "../constants/paymentConstants";

//Payments reducer to obtain all prerequisities to complete payments
//Prerequisite information stored in state and used by confirmCardPayments

export const paymentsReducer = (state = {}, action) => {
  switch (action.type) {
    case PAYMENT_REQUEST:
      return { loading: true };
    case PAYMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        successClient: true,
        clientSecret: action.payload,
      };
    case PAYMENT_FAIL:
      return { loading: false, error: action.payload };
    case MAKE_PAYMENT_METHOD_REQUEST:
      return { ...state };
    case MAKE_PAYMENT_METHOD_SUCCESS:
      return {
        ...state,
        loading: false,
        successMethod: true,
        paymentMethodReq: action.payload,
      };
    case MAKE_PAYMENT_METHOD_FAIL:
      return { loading: false, error: action.payload };

    case CONFIRM_PAYMENT_RESET:
      return {};

    default:
      return state;
  }
};
