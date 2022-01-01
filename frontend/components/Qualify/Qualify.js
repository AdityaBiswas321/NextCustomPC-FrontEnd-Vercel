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
import useLead from "../../hooks/useLead";
import useQualifyData from "./useQualifyData";
import useStepsAndPhases from "../../hooks/useStepsAndPhases";
import Script from "next/script";

import { API_URL } from "../../config";
import PaymentsDetail from "../Payments/PaymentsDetail";
import Payments from "../Payments/Payments";

import { AnimatePresence, motion } from "framer-motion";
import { CONFIRM_PAYMENT_RESET } from "../../constants/paymentConstants";

//animate: defines animation
//initial: defines initial state
//exit: defines aimation when component exits

const variants = {
  exit: {
    opacity: 0,
  },
  initial: {
    x: 200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", duration: 0.9, bounce: 0.4 },
  },
};

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
    setAddress,
    setCity,
    setProvince,
    setPostal,
    submitHandler,
    stripe,
  } = useQualifyData();

  useEffect(() => {
    dispatch({ type: CONFIRM_PAYMENT_RESET });
  }, []);

  return (
    <div className="lightgrey" style={{ height: "80vh" }}>
      <Col className="thumbIndex" xl={4} lg={4} style={{ padding: "0" }}>
        {lead && (
          <Message variant="success">{`Success!
         Your ID is ${lead._id}`}</Message>
        )}
        <AnimatePresence>
          {step1 ? (
            <motion.div
              variants={variants}
              key="1"
              exit={step1 === false && "exit"}
              initial="initial"
              animate={step1 ? "animate" : "exit"}
            >
              <ListGroup>
                <OrderSteps />
                <ListGroup.Item>
                  <Row>
                    <Col className="text-center">
                      <h5 className="my-2">
                        <strong>Select usage</strong>
                      </h5>
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
            </motion.div>
          ) : step2 ? (
            <motion.div
              variants={variants}
              key="2"
              exit={step2 === false && "exit"}
              initial="initial"
              animate={step2 ? "animate" : "exit"}
            >
              <ListGroup>
                <OrderSteps />
                <ListGroup.Item>
                  <Row>
                    <Col className="text-center">
                      <h5 className="my-2">Select Tab Usage</h5>
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
            </motion.div>
          ) : step3 ? (
            <motion.div
              variants={variants}
              key="3"
              exit={step3 === false && "exit"}
              initial="initial"
              animate={step3 && "animate"}
            >
              <ListGroup>
                <OrderSteps />
                <ListGroup.Item>
                  <Row>
                    <Col className="text-center">
                      <h5 className="my-2">Select Application Usage</h5>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    type="button"
                    className="btn-block"
                    onClick={() => alertclick3(1)}
                  >
                    Couple Apps - chrome, word
                  </Button>
                  <Button
                    type="button"
                    className="btn-block"
                    onClick={() => alertclick3(2)}
                  >
                    Few Apps - chrome, word, zoom
                  </Button>
                  <Button
                    type="button"
                    className="btn-block"
                    onClick={() => alertclick3(3)}
                  >
                    Many Apps - more than 4
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </motion.div>
          ) : (
            step4 && (
              <motion.div
                variants={variants}
                key="4"
                exit={step4 === false && "exit"}
                initial="initial"
                animate={step4 && "animate"}
              >
                <ListGroup>
                  <OrderSteps />
                  <ListGroup.Item>
                    <Row>
                      <Col className="text-center">
                        <h5 className="my-2">Select Budget</h5>
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
              </motion.div>
            )
          )}
        </AnimatePresence>
      </Col>
    </div>
  );
};

export default Qualify;
