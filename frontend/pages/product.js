import { useEffect } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Product from "../components/Product/Product";

const product = () => {
  useEffect(() => {
    const product = useSelector((state) => state.productOne);
  }, []);

  const productType = useSelector((state) => state.product);
  const { type, tab, app, ctype } = productType;

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
      {productType && (
        <Product
          Img={test4[len].Img}
          Img2={test4[len].Img2}
          id={test4[len].id}
          Des={test4[len].Des}
          Des2={test4[len].Des2}
          Des3={test4[len].Des3}
          Des4={test4[len].Des4}
        />
      )}
    </>
  );
};

export default product;
