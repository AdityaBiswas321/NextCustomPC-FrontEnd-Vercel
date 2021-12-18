import React from "react";
import { Nav, Button, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  stepOne,
  stepTwo,
  stepThree,
  stepFour,
  stepFive,
} from "../../actions/qualifyActions";
import styles from "./OrderSteps.module.css";
import useStepsAndPhases from "../../GlobalHooks/useStepsAndPhases";

const OrderSteps = () => {
  const dispatch = useDispatch();

  const { phase1, phase2, phase3, phase4, phase5 } = useStepsAndPhases();

  return (
    <div>
      <Nav className="justify-content-center mb-4 mt-4 ml-auto">
        <Nav.Item className={styles.width} style={{ marginRight: "2px" }}>
          {phase1 ? (
            <Button
              onClick={() => {
                dispatch(stepOne());
              }}
            >
              <u>Usage</u>
            </Button>
          ) : (
            <Button disabled>Usage</Button>
          )}
        </Nav.Item>

        <Nav.Item className={styles.width} style={{ marginRight: "2px" }}>
          {phase2 ? (
            <Button
              onClick={() => {
                dispatch(stepTwo());
              }}
            >
              <u>Tabs</u>
            </Button>
          ) : (
            <Button disabled>Tabs</Button>
          )}
        </Nav.Item>

        <Nav.Item className={styles.width} style={{ marginRight: "2px" }}>
          {phase3 ? (
            <Button
              onClick={() => {
                dispatch(stepThree());
              }}
            >
              <u>Apps</u>
            </Button>
          ) : (
            <Button disabled>Apps</Button>
          )}
        </Nav.Item>

        <Nav.Item className={styles.width} style={{ marginRight: "2px" }}>
          {phase4 ? (
            <Button
              onClick={() => {
                dispatch(stepFour());
              }}
            >
              <u>Budget</u>
            </Button>
          ) : (
            <Button disabled>Budget</Button>
          )}
        </Nav.Item>

        <Nav.Item className={styles.width5}>
          {phase5 ? (
            <Button
              onClick={() => {
                dispatch(stepFive());
              }}
            >
              <u>Submit</u>
            </Button>
          ) : (
            <Button disabled>Submit</Button>
          )}
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default OrderSteps;
