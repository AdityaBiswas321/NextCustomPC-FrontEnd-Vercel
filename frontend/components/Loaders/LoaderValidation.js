import { Spinner, Card, Row } from "react-bootstrap";

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
      <p className="text-center" style={{ marginTop: "5px" }}>
        Validating Address...
      </p>
    </>
  );
};

export default Loader;
