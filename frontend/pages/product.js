import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Product from "../components/Product/Product";

const product = () => {
  const productType = useSelector((state) => state.product);
  const { type, tab, app, ctype } = productType;
  const product = useSelector((state) => state.productOne);

  return (
    <>
      {type == "1" ? (
        <Product
          Img={product[0].Img}
          id={product[0].id}
          Description={product[0].Description}
        />
      ) : type == "2" ? (
        <Product
          Img={product[1].Img}
          id={product[1].id}
          Description={product[1].Description}
        />
      ) : (
        type == "3" && (
          <Product
            Img={product[2].Img}
            id={product[2].id}
            Description={product[3].Description}
          />
        )
      )}
    </>
  );
};

export default product;
