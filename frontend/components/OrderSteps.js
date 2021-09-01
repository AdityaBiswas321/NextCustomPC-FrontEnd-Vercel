import React from "react";
import { Nav, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { stepFour } from "../actions/qualifyActions";

const qualify = useSelector((state) => state.qualify);
const { step1, step2, step3, step4, step5 } = qualify;

const OrderSteps = ({ step1, step2, step3, step4, step5 }) => {
  const dispatch = useDispatch();

  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <Button onClick={dispatch(stepOne())}>Usage</Button>
        ) : (
          <Button disabled>Usage</Button>
        )}
      </Nav.Item>
      <Nav.Item>
        {step2 ? (
          <Button onClick={dispatch(stepTwo())}>Tabs</Button>
        ) : (
          <Button disabled>Tabs</Button>
        )}
      </Nav.Item>
      <Nav.Item>
        {step3 ? (
          <Button onClick={dispatch(stepThree())}>Application</Button>
        ) : (
          <Button disabled>Application</Button>
        )}
      </Nav.Item>
      <Nav.Item>
        {step4 ? (
          <Button onClick={dispatch(stepFour())}>Budget</Button>
        ) : (
          <Button disabled>Budget</Button>
        )}
      </Nav.Item>
      <Nav.Item>
        {step5 ? (
          <Button onClick={dispatch(stepFive())}>Submit</Button>
        ) : (
          <Button disabled>Submit</Button>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default OrderSteps;
