import React from "react";
import PaymentsDetail from "./PaymentsDetail";

const Payments = ({ Price, img }) => {
  console.log("PAYMENTS PRICE");
  console.log(Price);
  return <PaymentsDetail Price={Price} img={img} />;
};

export default Payments;
