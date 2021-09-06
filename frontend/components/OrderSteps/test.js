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

const OrderSteps = () => {
  const dispatch = useDispatch();

  const qualify = useSelector((state) => state.qualify);
  const { phase1, phase2, phase3, phase4, phase5 } = qualify;
  
  return (
    <Container fluid>
      <Row>
      <Col>
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
      </Col>
      </Col>

      <Row>
      <Col>
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
      </Col>
      </Col>

      <Row>
      <Col>
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
      </Col>
      </Col>

      <Row>
      <Col>
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
      </Col>
      </Col>

      <Row>
      <Col>
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
      </Col>
      </Col>
    </Container>
  );
};

export default OrderSteps;
