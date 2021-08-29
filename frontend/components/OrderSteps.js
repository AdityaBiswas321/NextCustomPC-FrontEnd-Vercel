import React from "react";
import { Nav, Button } from "react-bootstrap";

const OrderSteps = ({
  step1,
  step2,
  step3,
  step4,
  step5,
  Click1,
  Click2,
  Click3,
  Click4,
  Click5,
}) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <Button onClick={() => Click1()}>Usage</Button>
        ) : (
          <Button disabled>Usage</Button>
        )}
      </Nav.Item>
      <Nav.Item>
        {step2 ? (
          <Button onClick={() => Click2()}>Tabs</Button>
        ) : (
          <Button disabled>Tabs</Button>
        )}
      </Nav.Item>
      <Nav.Item>
        {step3 ? (
          <Button onClick={() => Click3()}>Application</Button>
        ) : (
          <Button disabled>Application</Button>
        )}
      </Nav.Item>
      <Nav.Item>
        {step4 ? (
          <Button onClick={() => Click4()}>Budget</Button>
        ) : (
          <Button disabled>Budget</Button>
        )}
      </Nav.Item>
      <Nav.Item>
        {step5 ? (
          <Button onClick={() => Click5()}>Submit</Button>
        ) : (
          <Button disabled>Submit</Button>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default OrderSteps;
