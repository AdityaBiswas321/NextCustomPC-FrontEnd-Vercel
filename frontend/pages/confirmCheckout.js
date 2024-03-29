import { useEffect, useState } from "react";
import { Card, Alert } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { connect } from "react-redux";
import Router from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { CONFIRM_PAYMENT_RESET } from "../constants/paymentConstants";

const confirmCheckout = (props) => {
  const [status, setStatus] = useState("");
  const [id, setId] = useState("");

  const confirmData = props.confirmData;

  //Confirm thta data is true
  //redirect confirmData is false
  const payment = () => {
    try {
      if (confirmData) {
        setStatus(props.confirmData.confirmCardPayment.paymentIntent.status);
        setId(props.confirmData.confirmCardPayment.paymentIntent.id);
      }
    } catch (error) {
      Router.push("/");
    }
  };

  const variants = {
    exit: {
      opacity: 0,
    },
    initial: {
      x: 200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
    },
  };

  useEffect(() => {
    payment();
  }, [confirmData]);

  return (
    <Card className="thumb">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
      >
        <Card.Title className="text-center ship">
          <u>Order confirmed!</u>
        </Card.Title>
        <Card.Body className="lightgrey ship">
          Thank you for trusting us with your build, we are building your
          machine to last for years to come.
        </Card.Body>
        <br></br>
        <Card.Body className="lightgrey">
          Order corfirmation has been sent to your email address
        </Card.Body>
        <br></br>
        <Card.Body className="darkgrey">
          Please feel free to contact us at :enter email:{" "}
        </Card.Body>
        <br></br>
        <Alert variant="success">
          Order Status: {status} <br></br> Order ID: {id}
        </Alert>
      </motion.div>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  confirmData: state.confirm,
  payments: state.payments,
});

export default connect(mapStateToProps)(confirmCheckout);
