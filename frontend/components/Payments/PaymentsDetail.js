import { useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import { API_URL } from "../../config/index.js";
import useQualifyData from "../Qualify/useQualifyData";
import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
} from "react-google-places-autocomplete";

const PaymentsDetail = ({}) => {
  // build ternary operator chain here

  const controls = useAnimation();

  const [value, setValue] = useState(null);

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

  let postalCode;
  let cityValue;
  let provinceValue;

  //value is null until api is called
  if (value !== null) {
    console.log(value);
    //return object that shows the address nicely
    let address = value.value.structured_formatting.main_text;

    // let cityValue = value.value.terms[1].value;
    // let provinceValue = value.value.terms[2].value;

    //id necessary for use with geocode to get postalcode/zipcode
    let placeID = value.value.place_id;

    console.log("City Value");
    console.log(cityValue);
    console.log(provinceValue);

    //key label is responsible for the input values of auto complete component
    value["label"] = address;

    //Get postal code/ zipcode, needs to be asyncronous
    const postal = async () => {
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

      setCity(cityValue);
      setProvince(provinceValue);
      setPostal(postalCode);

      console.log(postalCode);
      console.log("FUNCTION CITY");
      console.log(city);
      console.log(province);
    };
    postal();
  }

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

  //change on posta
  useEffect(() => {}, [postalCode]);

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
