import { useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import { API_URL } from "../../config/index.js";
import useQualifyData from "../Qualify/useQualifyData";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const PaymentsDetail = ({}) => {
  // build ternary operator chain here

  const controls = useAnimation();

  const [value, setValue] = useState(null);
  console.log(value);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [phone, setPhone] = useState("");
  const [postal, setPostal] = useState("");
  const [rate, setRate] = useState("");

  const [area, setArea] = useState("");
  const [step1, setStep] = useState(true);
  const [ship, setShip] = useState("");
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);

  const boxVariants = {
    hidden: { x: 200, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
      exit: {
        x: -200,
        opacity: 0,
        transition: {
          duraton: 0.5,
        },
      },
    },
  };

  let user_data = {
    user_name: name,
    user_phone: phone,
    user_postal: postal,
    user_address: address,
    user_city: city,
    user_province: province,
    user_email: email,
  };

  const areaSwitch = async () => {
    setStep(false);
    setStep2(true);
    // const { data } = await axios.post(`${API_URL}/api/ship`);
  };
  const shipSwitch = async () => {
    setStep2(false);
    setStep3(true);
    // const { data } = await axios.post(`${API_URL}/api/ship`);
  };

  const testData = async () => {
    console.log(user_data);
    const { data } = await axios.post(`${API_URL}/api/ship`, user_data);
    const rate = data.rates[0].amount_local;
    console.log("rate");
    console.log(rate);
    setRate(rate);
    setStep(false);
    setStep2(true);
    console.log("FROM SERVER");
    console.log(data);
    return rate;
  };

  return (
    <>
      {step1 ? (
        <Card className="thumb">
          <Card.Title className="text-center ship">
            <u>CALCULATE SHIPPING</u>
          </Card.Title>
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
          <GooglePlacesAutocomplete
            apiKey="AIzaSyDKfd2R00uZLdD5IJkoGxJo8VxQoIeWxdE"
            selectProps={{
              placeholder: "hello",
              value,
              onChange: setValue,
              styles: {
                dropdownIndicator: (provided) => ({
                  ...provided,
                  display: "none",
                }),
                control: (provided) => ({
                  ...provided,
                  borderRadius: "0px",
                }),
                indicatorSeparator: (provided) => ({
                  ...provided,
                  display: "none",
                }),
                valueContainer: (provided) => ({
                  ...provided,
                  padding: "8px 24px",
                }),
                placeholder: (provided) => ({
                  ...provided,
                }),
              },
            }}
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

          <Button
            type="button"
            className="btn-block"
            onClick={() => testData()}
          >
            Submit
          </Button>
        </Card>
      ) : (
        step2 && (
          <motion.div
            key="2"
            initial="hidden"
            animate={step2 && "animate"}
            variants={boxVariants}
          >
            <Card className="thumb">
              <Form.Group>
                <Card.Title className="ship">Shipping:${rate}</Card.Title>
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
            </Card>
          </motion.div>
        )
      )}
    </>
  );
};

export default PaymentsDetail;
