import React from "react";
import Image from "next/image";
import Payments from "../Payments/Payments";
import useQualifyData from "../Qualify/useQualifyData";
import { Card } from "react-bootstrap";

const Product = ({
  Img,
  Img2,
  Img3,
  Img4,
  Img5,
  id,
  Des,
  Des2,
  Des3,
  Des4,
  Des5,
  Des6,
  Des7,
}) => {
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
    <Card>
      <Card className="thumb">
        <Image src={Img} width={25} height={25} layout="responsive" />

        <Card.Title>{Des}</Card.Title>
        <Card.Body>{Des2}</Card.Body>
      </Card>

      <Card className="thumb">
        <Image src={Img2} width={25} height={25} layout="responsive" />

        <Card.Title>{Des3}</Card.Title>
        <Card.Body>{Des4}</Card.Body>
      </Card>
      <Card className="thumb">
        <Image src={Img3} width={25} height={25} layout="responsive" />

        <Card.Title>{Des}</Card.Title>
        <Card.Body>{Des5}</Card.Body>
      </Card>
      <Card className="thumb">
        <Image src={Img4} width={25} height={25} layout="responsive" />

        <Card.Title>{Des}</Card.Title>
        <Card.Body>{Des6}</Card.Body>
      </Card>
      <Card className="thumb">
        <Image src={Img5} width={25} height={25} layout="responsive" />

        <Card.Title>{Des}</Card.Title>
        <Card.Body>{Des7}</Card.Body>
      </Card>

      <Payments
        setEmail={setEmail}
        setName={setName}
        setPostal={setPostal}
        setAddress={setAddress}
        setCity={setCity}
        setProvince={setProvince}
      />
    </Card>
  );
};

export default Product;
