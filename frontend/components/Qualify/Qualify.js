import { useState, useEffect } from "react";
import { ListGroup, Button, Row, Col, Form, Card } from "react-bootstrap";
import FormContainer from "../FormContainer/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Link from "next/link";

import {
  createConfirmCardPayment,
  makePayment,
} from "../../actions/paymentsActions";
import { createPaymentMethod } from "../../actions/paymentsActions";

import Message from "../Message/Message";

import { dispatchChaining } from "../../actions/dispatchChaining";
import OrderSteps from "../OrderSteps/OrderSteps";
import useLead from "../../GlobalHooks/useLead";
import useQualifyData from "./useQualifyData";
import useStepsAndPhases from "../../GlobalHooks/useStepsAndPhases";
import Script from "next/script";

import { API_URL } from "../../config";
import PaymentsDetail from "../Payments/PaymentsDetail";
import Payments from "../Payments/Payments";

import { motion } from "framer-motion";

//animate: defines animation
//initial: defines initial state
//exit: defines aimation when component exits

const Qualify = () => {
  const dispatch = useDispatch();

  const { lead } = useLead();

  //Global state, switching what is displayed to user based on data collected. Changes based on progression.

  //Steps Changes based on functions activated from button clicks, managed by useQualifyData

  const { step1, step2, step3, step4, step5 } = useStepsAndPhases();

  const payments = useSelector((state) => state.payments);
  const { clientSecret, paymentMethodReq, confirmCardPayment, loading } =
    payments;
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
    setAddress,
    setCity,
    setProvince,
    setPostal,
    submitHandler,
    stripe,
  } = useQualifyData();

  useEffect(() => {
    dispatch(createConfirmCardPayment(clientSecret, paymentMethodReq, stripe));
  }, [paymentMethodReq]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
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
              onClick={() => alertclick2(1)}
            >
              Few Tabs - less than 5
            </Button>
            <Button
              type="button"
              className="btn-block"
              onClick={() => alertclick2(2)}
            >
              Moderate Tabs - between 5 - 10
            </Button>
            <Button
              type="button"
              className="btn-block"
              onClick={() => alertclick2(3)}
            >
              Many Tabs - more than 10
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
              onClick={() => alertclick3(1)}
            >
              Couple Applications - ex chrome, word
            </Button>
            <Button
              type="button"
              className="btn-block"
              onClick={() => alertclick3(2)}
            >
              Few Applications - ex chrome, word, zoom
            </Button>
            <Button
              type="button"
              className="btn-block"
              onClick={() => alertclick3(3)}
            >
              Many Applications - ex more than 4
            </Button>
          </ListGroup.Item>
        </ListGroup>
      ) : (
        step4 && (
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
                onClick={() => alertclick4(500)}
              >
                Budget: $150 - $500
              </Button>
              <Button
                type="button"
                className="btn-block"
                onClick={() => alertclick4(1200)}
              >
                Mid-Tier: $500 - $1200
              </Button>
              <Button
                type="button"
                className="btn-block"
                onClick={() => alertclick4(3000)}
              >
                High-End: +$1200
              </Button>
            </ListGroup.Item>
          </ListGroup>
        )
      )}
    </motion.div>
  );
};

export default Qualify;
