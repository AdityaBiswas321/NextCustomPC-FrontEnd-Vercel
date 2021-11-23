import React from "react";
import PaymentsDetail from "./PaymentsDetail";

const Payments = ({ Price }) => {
  console.log("PAYMENTS PRICE");
  console.log(Price);
  return <PaymentsDetail Price={Price} />;
};

export default Payments;
