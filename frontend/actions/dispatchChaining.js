import { makePayment } from "./paymentsActions";
import { createPaymentMethod } from "./paymentsActions";
import { createConfirmCardPayment } from "./paymentsActions";

export const dispatchChaining =
  (
    stripe,
    price,
    cardElement,
    billingDetails,
    clientSecret,
    paymentMethodReq
  ) =>
  async (dispatch) => {
    await Promise.all([
      dispatch(makePayment(price)),
      dispatch(createPaymentMethod(cardElement, billingDetails, stripe)),
    ]);

    // dispatch(createConfirmCardPayment(clientSecret, paymentMethodReq, stripe));
  };
