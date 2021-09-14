import React from "react";
import PaymentsDetail from "./PaymentsDetail";

const Payments = ({
  setName,
  setPhone,
  setPostal,
  setAddress,
  setCity,
  setProvince,
  setEmail,
}) => {
  return (
    <PaymentsDetail
      setName={setName}
      setEmail={setEmail}
      setPostal={setPostal}
      setAddress={setAddress}
      setCity={setCity}
      setProvince={setProvince}
    />
  );
};

export default Payments;
