import React from "react";
import { Nav, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  stepOne,
  stepTwo,
  stepThree,
  stepFour,
  stepFive,
} from "../actions/qualifyActions";

const OrderSteps = () => {
  const dispatch = useDispatch();

  const qualify = useSelector((state) => state.qualify);
  const { phase1, phase2, phase3, phase4, phase5 } = qualify;

  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
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
      <Nav.Item>
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
      <Nav.Item>
        {phase3 ? (
          <Button
            onClick={() => {
              dispatch(stepThree());
            }}
          >
            Application
          </Button>
        ) : (
          <Button disabled>Application</Button>
        )}
      </Nav.Item>
      <Nav.Item>
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
      <Nav.Item>
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
  );
};

export default OrderSteps;
