import { useEffect, useState } from "react";

import {
  Card,
  Form,
  Button,
  Alert,
  ListGroup,
  ListGroupItem,
  Modal,
} from "react-bootstrap";
import Image from "next/image";

import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import { API_URL } from "../../config/index.js";
import useQualifyData from "../Qualify/useQualifyData";
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
} from "react-google-places-autocomplete";
import { validate } from "../../actions/validationActions";
import { shipping } from "../../actions/shippingActions";
import LoaderShipping from "../Loaders/LoaderShipping";
import LoaderPayments from "../Loaders/LoaderPayments";
import LoaderValidation from "../Loaders/LoaderValidation";
import { VALIDATION_RESET } from "../../constants/validationConstants.js";
import Message from "../Message/Message.js";
import { SHIPPING_RESET } from "../../constants/shippingConstants.js";
import { createConfirmCardPayment } from "../../actions/paymentsActions.js";
import Router from "next/router";
import {
  CONFIRM_PAYMENT_RESET,
  CONFIRM_RESET,
} from "../../constants/paymentConstants.js";

const PaymentsDetail = (props) => {
  // build ternary operator chain here

  const dispatch = useDispatch();

  const stripe = useStripe();
  const elements = useElements();

  const {
    clientSecret,
    paymentMethodReq,
    loading: loadingPayments,
    successMethod,
  } = props.paymentsData;

  const { confirmCardPayment } = props.confirmData;

  console.log("Details payment method");
  console.log(paymentMethodReq);
  const shippingData = props.shippingData;
  //if completly messed up address fields are inputted, only the error here will catch it
  const { data, loading, error } = shippingData;

  const validateData = props.validateData;
  const { data: dataValidate, loading: loadingValidate } = validateData;

  console.log("PRICE HERE");
  console.log(props.Price);

  const Price = props.Price;

  const { submit } = useQualifyData();

  //modal logic
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    dispatch({ type: CONFIRM_RESET });
    dispatch({ type: CONFIRM_PAYMENT_RESET });
  };
  //

  const getRates = () => {
    if (data) {
      setRate(data.rates[0].amount_local);
      console.log("OBJECT ID");
      console.log(data.object_id);

      dispatch(validate({ validate: data.address_to.object_id }));
    }
  };

  const getValidation = () => {
    if (dataValidate) {
      const validity = dataValidate.validation_results.is_valid;
      setValid(validity);
      console.log("VALIDITY");
      console.log(validity);
    } else {
      setValid(null);
    }
  };
  // const rate = data.rates[0].amount_local;

  console.log("DATA CONNECT SHIP");
  console.log(shippingData);
  console.log("data");
  console.log(data);

  console.log("DATA CONNECT VALIDATE");
  console.log(validateData);
  console.log("Data Validate");
  console.log(dataValidate);
  console.log(loadingValidate);

  const controls = useAnimation();

  const [value, setValue] = useState(null);

  const [cityText, setCityText] = useState("");
  const [ProvinceText, setProvinceText] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [postal, setPostal] = useState("");
  const [rate, setRate] = useState("");
  const [total, setTotal] = useState("");
  const [validity, setValid] = useState(null);

  const [area, setArea] = useState("");
  const [step1, setStep] = useState(true);
  const [ship, setShip] = useState("");
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);

  let postalCode;
  let cityValue;
  let provinceValue;

  //value is null until api is called

  const addressAutoComplete = async () => {
    if (value !== null) {
      console.log(value);
      //return object that shows the address nicely
      let addressText = value.value.structured_formatting.main_text;

      // let cityValue = value.value.terms[1].value;
      // let provinceValue = value.value.terms[2].value;

      //id necessary for use with geocode to get postalcode/zipcode
      let placeID = value.value.place_id;

      console.log("City Value");
      console.log(cityValue);
      console.log(provinceValue);

      //key label is responsible for the input values of auto complete component
      value["label"] = addressText;

      //Get postal code/ zipcode, needs to be asyncronous

      let place = await geocodeByPlaceId(placeID);
      console.log("PLACE");
      console.log(place);

      //filter geocode types for postalcode
      let types =
        place[0].address_components.find((c) =>
          c.types.includes("postal_code")
        ) || {};
      let postalCode = types.long_name;

      //cities are mostly in types "locality", but not always
      let cityName =
        place[0].address_components.find((c) => c.types.includes("locality")) ||
        {};
      let cityValue = cityName.long_name;

      //states and provinces are not indexed properly, fluctuates between level1 and level 2 for states
      //Canadian provinces are mostly if not all under level 1
      //Some US states under level 2
      //well discussed design flaw of geocode
      let provinceName =
        place[0].address_components.find((c) =>
          c.types.includes("administrative_area_level_1")
        ) || {};
      let provinceValue = provinceName.long_name;

      let countryName =
        place[0].address_components.find((c) => c.types.includes("country")) ||
        {};
      let countryValue = countryName.short_name;

      setAddress(addressText);
      setCity(cityValue);
      setProvince(provinceValue);
      setPostal(postalCode);
      setCountry(countryValue);

      console.log(postalCode);
      console.log("FUNCTION CITY");
      console.log(city);
      console.log(province);
    }
  };

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

  const validFalse = () => {
    if (validity === false || error) {
      setStep(true);
      setStep2(false);
      console.log("VALID FALSE TRIGGER");
    }
  };

  const testData = async () => {
    setStep(false);
    setStep2(true);

    let user_data = {
      user_name: name,
      user_phone: phone,
      user_postal: postal,
      user_address: address,
      user_city: city,
      user_province: province,
      user_email: email,
      user_country: country,
    };

    // const createConfirmCardPayment = () => {
    //   if (paymentMethodReq) {
    //     console.log("CREATE CONFIRM");
    //     console.log(paymentMethodReq);

    //   }
    // };
    console.log("USER DATA");
    console.log(user_data);

    dispatch(shipping(user_data));

    //req needs to be object
    // const validation = {
    //   validate: data.address_to.object_id,
    // };

    // console.log("validate");
    // console.log(validation);

    // console.log("rate");
    // console.log(rate);

    // console.log("VALIDATE");
    // console.log(dataValidate);
    setRate(rate);

    // console.log("FROM SERVER");
    // console.log(data);
    // return rate;
  };

  useEffect(() => {
    addressAutoComplete();
    dispatch({ type: VALIDATION_RESET });
  }, [value]);
  useEffect(() => {
    getRates();
    //GET RID OF THIS ALLOW ALLOW SHIPPING DATA PRESISTENCE, [pass shipping data into forms]-> or save stepstate to redux
    dispatch({ type: SHIPPING_RESET });
  }, [data]);
  useEffect(() => {
    getValidation();
    setTotal(parseInt(Price) + parseInt(rate));
  }, [dataValidate]);
  useEffect(() => {
    validFalse();
  }, [validity, error]);
  useEffect(() => {});

  useEffect(() => {
    dispatch(createConfirmCardPayment(clientSecret, paymentMethodReq, stripe));
  }, [paymentMethodReq]);

  useEffect(() => {
    if (confirmCardPayment) {
      Router.push("/confirmCheckout");
    }
  }, [history, confirmCardPayment]);

  //change on posta

  return (
    <>
      <>
        {validity === false || error ? (
          <Message variant="danger">Incorrect Address</Message>
        ) : (
          validity === true && <Message>Address Validated & Servicable</Message>
        )}
      </>
      {step1 ? (
        <Card className="thumbCard">
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
            autocompletionRequest={{
              componentRestrictions: {
                country: ["us", "ca"],
              },
            }}
            selectProps={{
              placeholder: "185 Berry St. Suite 550",
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
                  backgroundColor: "#F7F7F9",
                  borderStyle: "none",
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
                  marginLeft: "0",
                  marginRight: "0",
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "#55595C",
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
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Form.Label>State/Province</Form.Label>
          <Form.Control
            name="state/province"
            type="text"
            placeholder="California / British Columbia"
            required
            value={province}
            onChange={(e) => setProvince(e.target.value)}
          />
          <Form.Label>Zip/Postal</Form.Label>
          <Form.Control
            name="zip/postal"
            type="text"
            placeholder="94103/V5X 2C6"
            required
            value={postal}
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
      ) : loading ? (
        <LoaderShipping />
      ) : loadingValidate ? (
        <LoaderValidation />
      ) : (
        step2 && (
          <motion.div
            key="2"
            initial="hidden"
            animate={step2 && "animate"}
            variants={boxVariants}
          >
            <Card className="thumbCard">
              <Form.Group>
                <Card.Title className="ship">Price:${props.Price}</Card.Title>
                <Card.Title className="ship">Shipping:${rate}</Card.Title>
                <hr />
                <Image
                  src={props.img}
                  width={25}
                  height={25}
                  layout="responsive"
                />
                <Card.Title>Features</Card.Title>
                <ListGroup>
                  <ListGroup.Item>:Graphics</ListGroup.Item>
                  <ListGroup.Item>:Ram</ListGroup.Item>
                  <ListGroup.Item>:CPU</ListGroup.Item>
                  <ListGroup.Item>:PowerSupply</ListGroup.Item>
                  <ListGroup.Item>:MotherBoard</ListGroup.Item>
                  <ListGroup.Item>:Storage</ListGroup.Item>
                </ListGroup>
                <hr />
                <Card.Title className="ship">Total:${total}</Card.Title>
                <hr />
                <Form.Label className="ship">Card Details</Form.Label>

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

                <Button
                  type="button"
                  className="btn-block ship"
                  onClick={handleShow}
                >
                  Buy Now !
                </Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Make Purchase</Modal.Title>
                  </Modal.Header>
                  {loadingPayments ? (
                    <Modal.Body>
                      <LoaderPayments />
                    </Modal.Body>
                  ) : (
                    <>
                      {paymentMethodReq?.error && (
                        <Message variant="danger">
                          {paymentMethodReq?.error?.message}
                        </Message>
                      )}
                      <Modal.Body>Confirm purchase?</Modal.Body>

                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button
                          variant="primary"
                          onClick={() => submit(name, email, postal, total)}
                          disabled={successMethod}
                        >
                          {successMethod ? "Loading..." : "Confirm Purchase"}
                        </Button>
                      </Modal.Footer>
                    </>
                  )}
                </Modal>
              </Form.Group>
            </Card>
          </motion.div>
        )
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  shippingData: state.shipping,
  validateData: state.validation,
  paymentsData: state.payments,
  confirmData: state.confirm,
});

export default connect(mapStateToProps)(PaymentsDetail);
