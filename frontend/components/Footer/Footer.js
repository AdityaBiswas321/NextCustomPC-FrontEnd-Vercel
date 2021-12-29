import React from "react";
import { Container, Row, Col } from "react-bootstrap";

//Footer

const Footer = () => {
  return (
    <footer>
      <Container className="">
        <Row>
          <Col className="text-center py-3">Copyright &copy; NPXComputers</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
