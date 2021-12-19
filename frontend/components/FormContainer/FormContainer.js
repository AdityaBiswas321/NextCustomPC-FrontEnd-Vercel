import React from "react";
import { Container, Row, Col } from "react-bootstrap";

//Archieved code, not used

//Has use in the future

const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
