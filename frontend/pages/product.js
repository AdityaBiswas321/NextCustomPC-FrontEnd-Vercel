import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

const product = () => {
  const productType = useSelector((state) => state.product);
  const { type, tab, app, ctype } = productType;

  const product = useSelector((state) => state.productOne);
  const { id, Img, Description } = product[2];

  console.log(id, Img, Description);
  return (
    <>
      <Image src={Img} width={25} height={25} layout="responsive" />
      <div>{id}</div>
      <div>{Description}</div>
    </>
  );
};

export default product;
