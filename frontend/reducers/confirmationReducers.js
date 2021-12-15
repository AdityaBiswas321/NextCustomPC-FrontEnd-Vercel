import {
  CONFIRM_PAYMENT_REQUEST,
  CONFIRM_PAYMENT_SUCCESS,
  CONFIRM_PAYMENT_FAIL,
  CONFIRM_RESET,
} from "../constants/paymentConstants";

export const confirmReducer = (state = {}, action) => {
  switch (action.type) {
    case CONFIRM_PAYMENT_REQUEST:
      return { loading: true };
    case CONFIRM_PAYMENT_SUCCESS:
      return {
        loading: false,
        confirmCardPayment: action.payload,
        successConfirm: true,
      };
    case CONFIRM_PAYMENT_FAIL:
      return { loading: false, ConfirmError: action.payload };

    case CONFIRM_RESET:
      return {};

    default:
      return state;
  }
};
