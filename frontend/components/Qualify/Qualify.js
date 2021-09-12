import { useState, useEffect } from "react";
import { ListGroup, Button, Row, Col, Form, Card } from "react-bootstrap";
import FormContainer from "../FormContainer/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { saveLeadForm } from "../../actions/computerActions";

import Message from "../Message/Message";

import OrderSteps from "../OrderSteps/OrderSteps";
import useLead from "../../GlobalHooks/useLead";
import useQualifyData from "./useQualifyData";
import useStepsAndPhases from "../../GlobalHooks/useStepsAndPhases";
import Script from "next/script";

import { CardElement } from "@stripe/react-stripe-js";
import { API_URL } from "../../config";

const Qualify = () => {
  const dispatch = useDispatch();

  const { lead } = useLead();

  //Global state, switching what is displayed to user based on data collected. Changes based on progression.

  //Steps Changes based on functions activated from button clicks, managed by useQualifyData

  const { step1, step2, step3, step4, step5 } = useStepsAndPhases();

  //Local state data collected from form, functions which update local state and steps (steps alter ternary to change what is rendered)

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
    setPostal,
  } = useQualifyData();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(type);
    console.log(tab);
    console.log(app);
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(postal);
    console.log(Ctype);

    //Save data to global state
    dispatch(
      saveLeadForm({ type, tab, app, name, email, phone, postal, Ctype })
    );

    const { data: clientSecret } = await axios.post(
      `${API_URL}/api/payment_intents`,
      {
        amount: price * 100,
      }
    );

    console.log(clientSecret);
    // create a payment intent on the server
    //sclient_secret of that payment intent

    // need reference  to the cardElement
    // need stripe.js
    //create a payment method

    // confirm the card payments
    //payment method if
    //client_secret
  };

  console.log(step1);

  useEffect(() => {
    if (lead) {
      console.log(lead);
      console.log("from useEffect");
    }
  }, [lead]);

  return (
    <>
      {lead && (
        <Message variant="success">{`Success!
         Your ID is ${lead._id}`}</Message>
      )}
      {step1 ? (
        <ListGroup>
          <OrderSteps />
          <ListGroup.Item>
            <Row>
              <Col className="text-center py-2">
                <h5>
                  <strong>Select usage</strong>
                </h5>
              </Col>
            </Row>
            <Row style={{ textAlign: "center" }}>
              <Col className="text-center py-2">
                <text>
                  Identifying the usage determines the types of parts requied.
                  <br></br>
                  For example, most work related computers do not require an
                  additional graphics card, however a gaming computer will most
                  likely need a graphic card to function. <br></br>Both of which
                  affect price and effectiveness of your machine!
                </text>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button
              type="button"
              className="btn-block"
              onClick={() => alertclick("Home Office")}
            >
              Home Office
            </Button>
            <Button
              type="button"
              className="btn-block"
              onClick={() => alertclick("Content Creation")}
            >
              Content Creation
            </Button>
            <Button
              type="button"
              className="btn-block"
              onClick={() => alertclick("Gaming")}
            >
              Gaming
            </Button>
          </ListGroup.Item>
        </ListGroup>
      ) : step2 ? (
        <ListGroup>
          <OrderSteps />
          <ListGroup.Item>
            <Row>
              <Col className="text-center py-2">
                <h5>Select Tab Usage</h5>
              </Col>
            </Row>
            <Row style={{ textAlign: "center" }}>
              <Col className="text-center py-2">
                <text>
                  Tab usage determines the amount and type of RAM is required.
                  <br></br>
                  This can be more complex to determine however, someone who
                  uses 24 tabs and multiple application will require more RAM
                  <br></br>to be efficient than someone who operates in a
                  minimalistic fashion with their machine.
                </text>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button
              type="button"
              className="btn-block"
              onClick={() => alertclick2("less than 4 tabs")}
            >
              Few Tabs - less than 4
            </Button>
            <Button
              type="button"
              className="btn-block"
              onClick={() => alertclick2("between 4-8 tabs")}
            >
              Moderate Tabs - between 4 - 8
            </Button>
            <Button
              type="button"
              className="btn-block"
              onClick={() => alertclick2("more than 8 tabs")}
            >
              Many Tabs - more than 8
            </Button>
          </ListGroup.Item>
        </ListGroup>
      ) : step3 ? (
        <ListGroup>
          <OrderSteps />
          <ListGroup.Item>
            <Row>
              <Col className="text-center py-2">
                <h5>Select Application Usage</h5>
              </Col>
            </Row>
            <Row style={{ textAlign: "center" }}>
              <Col className="text-center py-2">
                <text>
                  Application usage determines the type of cpu required, which
                  affects how efficient the machine runs. <br></br>For example,
                  an Executive Assistant would require multiple application
                  running during an online board meeting presentation than a
                  video producer.
                </text>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button
              type="button"
              className="btn-block"
              onClick={() => alertclick3("2 applications")}
            >
              Couple Applications - ex chrome, word
            </Button>
            <Button
              type="button"
              className="btn-block"
              onClick={() => alertclick3("3 applications")}
            >
              Few Applications - ex chrome, word, zoom
            </Button>
            <Button
              type="button"
              className="btn-block"
              onClick={() => alertclick3("+4 applications")}
            >
              Many Applications - ex more than 4
            </Button>
          </ListGroup.Item>
        </ListGroup>
      ) : step4 ? (
        <ListGroup>
          <OrderSteps />
          <ListGroup.Item>
            <Row>
              <Col className="text-center py-2">
                <h5>Select Budget</h5>
              </Col>
            </Row>
            <Row style={{ textAlign: "center" }}>
              <Col className="text-center py-2">
                <text>
                  To determine types of parts we can build the machine with
                </text>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button
              type="button"
              className="btn-block"
              onClick={() => alertclick4("budget: $150 - $500")}
            >
              Budget: $150 - $500
            </Button>
            <Button
              type="button"
              className="btn-block"
              onClick={() => alertclick4("Mid-Tier: $500 - $1200")}
            >
              Mid-Tier: $500 - $1200
            </Button>
            <Button
              type="button"
              className="btn-block"
              onClick={() => alertclick4("High-End: +$1200")}
            >
              High-End: +$1200
            </Button>
          </ListGroup.Item>
        </ListGroup>
      ) : (
        step5 && (
          <>
            <OrderSteps />
            <FormContainer>
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Phone"
                    value={phone}
                    required
                    onChange={(e) => setPhone(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="postal">
                  <Form.Label>Postal</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Postal"
                    value={postal}
                    required
                    onChange={(e) => setPostal(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Card Details</Form.Label>
                  <CardElement
                    options={{
                      style: {
                        base: {
                          fontSize: "16px",
                          color: "#424770",
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

                <Button type="submit" variant="primary">
                  Continue
                </Button>
              </Form>
            </FormContainer>
          </>
        )
      )}
    </>
  );
};

export default Qualify;
