import { makePayment } from "./paymentsActions";
import { createPaymentMethod } from "./paymentsActions";
import { createConfirmCardPayment } from "./paymentsActions";

//Archived code, dispatch chaining to run multiple actions asyncronously

//Problem: running dispatch asyncronously outside of actions, still not solved.

//I separated dispatches into different functions
//Which run conditionally after another function with a dispatch executes

//Dispatch chaining is ideal for that, however never implemented.

//Important for payment system as multiple async api calls are necessary

//Important to use this way since redux is seriallized and can track problems when debugging between api calls.

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
