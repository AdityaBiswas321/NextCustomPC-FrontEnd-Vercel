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

  // const payments = useSelector((state) => state.payments);
  // const { clientSecret, paymentMethodReq, confirmCardPayment, loading } =
  //   payments;
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
    <>
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
                  <Col className="text-center py-2">
                    <h5>
                      <strong>Select usage</strong>
                    </h5>
                  </Col>
                </Row>
                <Row style={{ textAlign: "center" }}>
                  <Col className="text-center py-2">
                    <text>
                      Identifying the usage determines the types of parts
                      requied.
                      <br></br>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris <br></br>
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
                  <Col className="text-center py-2">
                    <h5>Select Tab Usage</h5>
                  </Col>
                </Row>
                <Row style={{ textAlign: "center" }}>
                  <Col className="text-center py-2">
                    <text>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia
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
                  <Col className="text-center py-2">
                    <h5>Select Application Usage</h5>
                  </Col>
                </Row>
                <Row style={{ textAlign: "center" }}>
                  <Col className="text-center py-2">
                    <text>
                      magni dolores eos qui ratione voluptatem sequi nesciunt.
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit, sed quia non numquam
                      eius modi tempora incidunt ut labore et dolore magnam
                      aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                      eum iure
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
                  Couple Applications - chrome, word
                </Button>
                <Button
                  type="button"
                  className="btn-block"
                  onClick={() => alertclick3(2)}
                >
                  Few Applications - chrome, word, zoom
                </Button>
                <Button
                  type="button"
                  className="btn-block"
                  onClick={() => alertclick3(3)}
                >
                  Many Applications - more than 4
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
                    <Col className="text-center py-2">
                      <h5>Select Budget</h5>
                    </Col>
                  </Row>
                  <Row style={{ textAlign: "center" }}>
                    <Col className="text-center py-2">
                      <text>
                        To determine types of parts we can build the machine
                        with
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
            </motion.div>
          )
        )}
      </AnimatePresence>
    </>
  );
};

export default Qualify;
