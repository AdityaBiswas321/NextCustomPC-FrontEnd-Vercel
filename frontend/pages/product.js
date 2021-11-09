import { useEffect } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Product from "../components/Product/Product";
import ProductData, { productData } from "../ProductData/ProductOne.js";

const product = () => {
  const productType = useSelector((state) => state.product);
  const { type, tab, app, ctype } = productType;

  // const productTest = useSelector((state) => state.productOne);
  console.log(productData);
  console.log("HELLO");

  //quasi neural network sorting algorithm

  const test1 = productData.filter((test) => test.type === type);
  console.log(test1);

  const test2 = test1.filter((test) => test.tab >= tab);
  console.log(test2);

  const test3 = test2.filter((test) => test.app >= app);
  console.log(test3);
  console.log("TEST 3");

  const test4 = test2.filter((test) => test.budget <= ctype);
  const len = test4.length - 1;
  console.log(test4);
  console.log("TEST4");

  //test4.length needs to be true so page doesn't show error when refreshed
  //Add reroute later
  return (
    <>
      {test4.length !== 0 ? (
        <Product
          Img={test4[len].Img}
          Img2={test4[len].Img2}
          id={test4[len].id}
          Des={test4[len].Des}
          Des2={test4[len].Des2}
          Des3={test4[len].Des3}
          Des4={test4[len].Des4}
          Img3={test4[len].Img3}
          Des5={test4[len].Des5}
          Img4={test4[len].Img4}
          Des6={test4[len].Des6}
          Img5={test4[len].Img5}
          Des7={test4[len].Des7}
        />
      ) : (
        <p>HELLO</p>
      )}
    </>
  );
};

export default product;
