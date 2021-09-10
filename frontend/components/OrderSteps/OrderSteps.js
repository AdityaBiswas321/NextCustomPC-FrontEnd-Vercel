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
import useOrderSteps from "./useOrderSteps";

const OrderSteps = () => {
  const dispatch = useDispatch();

  const { phase1, phase2, phase3, phase4, phase5 } = useOrderSteps();
  return (
    <div>
      <Nav className="justify-content-center mb-4 mt-4 ml-auto">
        <Nav.Item className={styles.width}>
          {phase1 ? (
            <Button
              onClick={() => {
                dispatch(stepOne());
              }}
            >
              Usage
            </Button>
          ) : (
            <Button disabled>Usage</Button>
          )}
        </Nav.Item>

        <Nav.Item className={styles.width}>
          {phase2 ? (
            <Button
              onClick={() => {
                dispatch(stepTwo());
              }}
            >
              Tabs
            </Button>
          ) : (
            <Button disabled>Tabs</Button>
          )}
        </Nav.Item>

        <Nav.Item className={styles.width}>
          {phase3 ? (
            <Button
              onClick={() => {
                dispatch(stepThree());
              }}
            >
              Apps
            </Button>
          ) : (
            <Button disabled>Apps</Button>
          )}
        </Nav.Item>

        <Nav.Item className={styles.width}>
          {phase4 ? (
            <Button
              onClick={() => {
                dispatch(stepFour());
              }}
            >
              Budget
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
              Submit
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
