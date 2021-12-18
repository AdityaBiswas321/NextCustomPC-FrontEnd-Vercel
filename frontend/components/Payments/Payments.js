import React from "react";
import PaymentsDetail from "./PaymentsDetail";

const Payments = ({ Price, img, Components }) => {
  console.log("PAYMENTS PRICE");
  console.log(Price);
  return <PaymentsDetail Price={Price} img={img} Components={Components} />;
};

export default Payments;
