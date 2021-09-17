export const dispatchChaining =
  (price, cardElement, billingDetails, clientSecret, paymentMethodReq) =>
  async (dispatch) => {
    await Promise.all([
      dispatch(makePayment(price)),
      dispatch(createPaymentMethod(cardElement, billingDetails)),
    ]);

    return dispatch(confirmCardPayment(clientSecret, paymentMethodReq));
  };
