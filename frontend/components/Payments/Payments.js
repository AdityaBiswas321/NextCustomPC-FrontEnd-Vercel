import React from "react";
import PaymentsDetail from "./PaymentsDetail";

//Passing props to PaymentDetails component
//Not necessary remove and refactor accordingly in the coming future

const Payments = ({ Price, img, Components }) => {
  console.log("PAYMENTS PRICE");
  console.log(Price);
  return <PaymentsDetail Price={Price} img={img} Components={Components} />;
};

export default Payments;
