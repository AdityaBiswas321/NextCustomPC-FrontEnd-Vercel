import { Spinner, Card, Row } from "react-bootstrap";

//Loader Animation when payments intent began to
//when confirmCardPayment action successfully completes

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
        Processing...
      </Card.Body>
    </>
  );
};

export default Loader;
