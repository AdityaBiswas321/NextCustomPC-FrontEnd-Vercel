import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Product from "../components/Product/Product";

const product = () => {
  const productType = useSelector((state) => state.product);
  const { type, tab, app, ctype } = productType;
  const product = useSelector((state) => state.productOne);

  const test1 = product.filter((test) => test.type === type);
  console.log(test1);

  const test2 = test1.filter((test) => test.tab >= tab);
  console.log(test2);

  const test3 = test2.filter((test) => test.app >= app);
  console.log(test3);

  const test4 = test2.filter((test) => test.budget <= ctype);
  const len = test4.length - 1;
  console.log(test4);
  return (
    <>
      <Product
        Img={test4[len].Img}
        Img2={test4[len].Img2}
        id={test4[len].id}
        Des={test4[len].Des}
        Des2={test4[len].Des2}
        Des3={test4[len].Des3}
        Des4={test4[len].Des4}
      />

      {/* {type == "1" &&
      (tab == "1") | (tab == "2") &&
      (app == "1") | (app == "2") &&
      ctype == "1" ? (
        <Product
          Img={product[0].Img}
          id={product[0].id}
          Description={product[0].Description}
        />
      ) : (type == "1") | (type == "2") &&
        (tab == "1") | (tab == "2") &&
        (app == "1") | (app == "2") | (app == "3") &&
        ctype == "2" ? (
        <Product
          Img={product[1].Img}
          id={product[1].id}
          Description={product[1].Description}
        />
      ) : (type == "1") | (type == "2") | (type == "3") &&
        (tab == "1") | (tab == "2") &&
        (app == "1") | (app == "2") | (app == "3") ? (
        ctype == "3" && (
          <Product
            Img={product[2].Img}
            id={product[2].id}
            Description={product[2].Description}
          />
        )
      ) : (
        (type == "1") | (type == "2") | (type == "3") &&
        tab == "3" &&
        (app == "1") | (app == "2") | (app == "3") &&
        ctype == "3" && (
          <Product
            Img={product[3].Img}
            id={product[3].id}
            Description={product[3].Description}
          />
        )
      )} */}
    </>
  );
};

export default product;
