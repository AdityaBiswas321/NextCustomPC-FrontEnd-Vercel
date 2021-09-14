import React from "react";
import { Form } from "react-bootstrap";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const PaymentsDetail = ({
  setName,
  setPhone,
  setPostal,
  setAddress,
  setCity,
  setProvince,
  setEmail,
}) => {
  return (
    <>
      <Form.Label>Name</Form.Label>
      <Form.Control
        name="name"
        type="text"
        placeholder="Jane Doe"
        required
        onChange={(e) => setName(e.target.value)}
      />
      <Form.Label>Email</Form.Label>
      <Form.Control
        name="email"
        type="email"
        placeholder="jane.doe@example.com"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <Form.Label>Address</Form.Label>
      <Form.Control
        name="address"
        type="text"
        placeholder="185 Berry St. Suite 550"
        required
        onChange={(e) => setAddress(e.target.value)}
      />
      <Form.Label>City</Form.Label>
      <Form.Control
        name="city"
        type="text"
        placeholder="San Francisco"
        required
        onChange={(e) => setCity(e.target.value)}
      />
      <Form.Label>State/Province</Form.Label>
      <Form.Control
        name="state/province"
        type="text"
        placeholder="California / British Columbia"
        required
        onChange={(e) => setProvince(e.target.value)}
      />
      <Form.Label>Zip/Postal</Form.Label>
      <Form.Control
        name="zip/postal"
        type="text"
        placeholder="94103/V5X 2C6"
        required
        onChange={(e) => setPostal(e.target.value)}
      />

      <Form.Group>
        <Form.Label>Card Details</Form.Label>

        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                lineHeight: "48px",
                backgroundColor: "#f7f7f9",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
            hidePostalCode: true,
          }}
        />
      </Form.Group>
    </>
  );
};

export default PaymentsDetail;
