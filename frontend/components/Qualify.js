import { useState, useEffect } from "react";
import { ListGroup, Button, Row, Col, Form, Card } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { saveLeadForm } from "../actions/computerActions";
import Message from "./Message";
import OrderSteps from "./OrderSteps";

const Qualify = () => {
  const dispatch = useDispatch();

  const computerLead = useSelector((state) => state.computerLeads);
  const { lead } = computerLead;

  const qualify = useSelector((state) => state.qualify);
  const { step1, step2, step3, step4, step5 } = qualify;

  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [step4, setStep4] = useState(false);
  const [step5, setStep5] = useState(false);

  const [type, setType] = useState("");
  const [tab, setTab] = useState("");
  const [app, setApp] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postal, setPostal] = useState("");
  const [Ctype, setCtype] = useState("");

  const Click1 = () => {
    setStep1(true);
    setStep2(false);
    setStep3(false);
    setStep4(false);
    setStep5(false);
  };
  const Click2 = () => {
    setStep1(false);
    setStep2(true);
    setStep3(false);
    setStep4(false);
    setStep5(false);
  };
  const Click3 = () => {
    setStep1(false);
    setStep2(false);
    setStep3(true);
    setStep4(false);
    setStep5(false);
  };
  const Click4 = () => {
    setStep1(false);
    setStep2(false);
    setStep3(false);
    setStep4(true);
    setStep5(false);
  };
  const Click5 = () => {
    setStep1(false);
    setStep2(false);
    setStep3(false);
    setStep4(false);
    setStep5(true);
  };

  const alertclick = (type) => {
    setStep1(false);
    setStep2(true);
    setType(type);
  };
  const alertclick2 = (tab) => {
    setStep2(false);
    setStep3(true);
    setTab(tab);
  };
  const alertclick3 = (app) => {
    setStep3(false);
    setStep4(true);
    setApp(app);
  };
  const alertclick4 = (Ctype) => {
    setStep4(false);
    setStep5(true);
    setCtype(Ctype);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(type);
    console.log(tab);
    console.log(app);
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(postal);
    console.log(Ctype);

    dispatch(
      saveLeadForm({ type, tab, app, name, email, phone, postal, Ctype })
    );
  };

  useEffect(() => {
    if (lead) {
      console.log(lead);
      console.log("from useEffect");
    }
  }, [lead]);

  return (
    <>
      {lead && (
        <Message variant="success">{`Success!
         Your ID is ${lead._id}`}</Message>
      )}
      {step1 ? (
        <ListGroup>
          <OrderSteps step1 Click1={() => Click1()} />
          <ListGroup.Item>
            <Row>
              <Col className="text-center py-2">
                <h5>
                  <strong>Select usage</strong>
                </h5>
              </Col>
            </Row>
            <Row style={{ textAlign: "center" }}>
              <Col className="text-center py-2">
                <text>
                  Identifying the usage determines the types of parts requied.
                  <br></br>
                  For example, most work related computers do not require an
                  additional graphics card, however a gaming computer will most
                  likely need a graphic card to function. <br></br>Both of which
                  affect price and effectiveness of your machine!
                </text>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button
              type="button"
              className="btn-block"
              onClick={() => alertclick("Home Office")}
            >
              Home Office
            </Button>
            <Button
              type="button"
              className="btn-block"
              onClick={() => alertclick("Content Creation")}
            >
              Content Creation
            </Button>
            <Button
              type="button"
              className="btn-block"
              onClick={() => alertclick("Gaming")}
            >
              Gaming
            </Button>
          </ListGroup.Item>
        </ListGroup>
      ) : step2 ? (
        <ListGroup>
          <OrderSteps
            step1
            step2
            Click1={() => Click1()}
            Click2={() => Click2()}
          />
          <ListGroup.Item>
            <Row>
              <Col className="text-center py-2">
                <h5>Select Tab Usage</h5>
              </Col>
            </Row>
            <Row style={{ textAlign: "center" }}>
              <Col className="text-center py-2">
                <text>
                  Tab usage determines the amount and type of RAM is required.
                  <br></br>
                  This can be more complex to determine however, someone who
                  uses 24 tabs and multiple application will require more RAM
                  <br></br>to be efficient than someone who operates in a
                  minimalistic fashion with their machine.
                </text>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button
              type="button"
              className="btn-block"
              onClick={() => alertclick2("less than 4 tabs")}
            >
              Few Tabs - less than 4
            </Button>
            <Button
              type="button"
              className="btn-block"
              onClick={() => alertclick2("between 4-8 tabs")}
            >
              Moderate Tabs - between 4 - 8
            </Button>
            <Button
              type="button"
              className="btn-block"
              onClick={() => alertclick2("more than 8 tabs")}
            >
              Many Tabs - more than 8
            </Button>
          </ListGroup.Item>
        </ListGroup>
      ) : step3 ? (
        <ListGroup>
          <OrderSteps
            step1
            step2
            step3
            Click1={() => Click1()}
            Click2={() => Click2()}
            Click3={() => Click3()}
          />
          <ListGroup.Item>
            <Row>
              <Col className="text-center py-2">
                <h5>Select Application Usage</h5>
              </Col>
            </Row>
            <Row style={{ textAlign: "center" }}>
              <Col className="text-center py-2">
                <text>
                  Application usage determines the type of cpu required, which
                  affects how efficient the machine runs. <br></br>For example,
                  an Executive Assistant would require multiple application
                  running during an online board meeting presentation than a
                  video producer.
                </text>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button
              type="button"
              className="btn-block"
              onClick={() => alertclick3("2 applications")}
            >
              Couple Applications - ex chrome, word
            </Button>
            <Button
              type="button"
              className="btn-block"
              onClick={() => alertclick3("3 applications")}
            >
              Few Applications - ex chrome, word, zoom
            </Button>
            <Button
              type="button"
              className="btn-block"
              onClick={() => alertclick3("+4 applications")}
            >
              Many Applications - ex more than 4
            </Button>
          </ListGroup.Item>
        </ListGroup>
      ) : step4 ? (
        <ListGroup>
          <OrderSteps
            step1
            step2
            step3
            step4
            Click1={() => Click1()}
            Click2={() => Click2()}
            Click3={() => Click3()}
            Click4={() => Click4()}
          />
          <ListGroup.Item>
            <Row>
              <Col className="text-center py-2">
                <h5>Select Budget</h5>
              </Col>
            </Row>
            <Row style={{ textAlign: "center" }}>
              <Col className="text-center py-2">
                <text>
                  To determine types of parts we can build the machine with
                </text>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button
              type="button"
              className="btn-block"
              onClick={() => alertclick4("budget: $150 - $500")}
            >
              Budget: $150 - $500
            </Button>
            <Button
              type="button"
              className="btn-block"
              onClick={() => alertclick4("Mid-Tier: $500 - $1200")}
            >
              Mid-Tier: $500 - $1200
            </Button>
            <Button
              type="button"
              className="btn-block"
              onClick={() => alertclick4("High-End: +$1200")}
            >
              High-End: +$1200
            </Button>
          </ListGroup.Item>
        </ListGroup>
      ) : (
        step5 && (
          <>
            <OrderSteps
              step1
              step2
              step3
              step4
              step5
              Click1={() => Click1()}
              Click2={() => Click2()}
              Click3={() => Click3()}
              Click4={() => Click4()}
              Click5={() => Click5()}
            />
            <FormContainer>
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Phone"
                    value={phone}
                    required
                    onChange={(e) => setPhone(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="postal">
                  <Form.Label>Postal</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Postal"
                    value={postal}
                    required
                    onChange={(e) => setPostal(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Button type="submit" variant="primary">
                  Continue
                </Button>
              </Form>
            </FormContainer>
          </>
        )
      )}
    </>
  );
};

export default Qualify;
