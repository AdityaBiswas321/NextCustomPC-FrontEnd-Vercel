import React from "react";
import Image from "next/image";
import Payments from "../Payments/Payments";
import useQualifyData from "../Qualify/useQualifyData";

const Product = ({ Img, id, Description }) => {
  console.log(Img);
  const {
    type,
    tab,
    app,
    name,
    email,
    phone,
    postal,
    Ctype,
    alertclick,
    alertclick2,
    alertclick3,
    alertclick4,
    setEmail,
    setName,
    setPhone,
    setAddress,
    setCity,
    setProvince,
    setPostal,
    submitHandler,
    stripe,
  } = useQualifyData();

  return (
    <>
      <Image src={Img} width={25} height={25} layout="responsive" />
      <div>{id}</div>
      <div>{Description}</div>
      <Payments
        setEmail={setEmail}
        setName={setName}
        setPostal={setPostal}
        setAddress={setAddress}
        setCity={setCity}
        setProvince={setProvince}
      />
    </>
  );
};

export default Product;
