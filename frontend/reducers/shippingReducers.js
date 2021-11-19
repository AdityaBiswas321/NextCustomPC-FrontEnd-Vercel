import {
  SHIPPING_REQUEST,
  SHIPPING_SUCCESS,
  SHIPPING_FAIL,
  SHIPPING_RESET,
} from "../constants/shippingConstants";

export const shippingReducer = (state = {}, action) => {
  switch (action.type) {
    case SHIPPING_REQUEST:
      return { loading: true };
    case SHIPPING_SUCCESS:
      return { loading: false, success: true, data: action.payload };
    case SHIPPING_FAIL:
      return { loading: false, error: action.payload };
    case SHIPPING_RESET:
      return {};
    default:
      return state;
  }
};
