import { Spinner, Card, Row } from "react-bootstrap";

//Loading Animation, shipping api from request to success or fail

const Loader = () => {
  return (
    <>
      <Spinner
        animation="border"
        role="status"
        style={{
          width: "100px",
          height: "100px",
          margin: "auto",
          display: "block",
          marginTop: "7px",
        }}
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
      <Card.Body className="text-center absolute" style={{ marginTop: "5px" }}>
        Getting Rates...
      </Card.Body>
    </>
  );
};

export default Loader;
