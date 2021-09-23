import React from "react";
import { useSelector } from "react-redux";

const product = () => {
  const product = useSelector((state) => state.product);
  const { type, tab, app, ctype } = product;

  return (
    <>
      <div>{type}</div>
      <div>{tab}</div>
      <div>{app}</div>
      <div>{ctype}</div>
    </>
  );
};

export default product;
