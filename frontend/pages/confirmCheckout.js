import { useEffect } from "react";
import { Card, Alert } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";

import { useSelector } from "react-redux";

const confirmCheckout = () => {
  const payment = useSelector((state) => state.payments);

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
    if (payment) {
      const { status, id } = payment.confirmCardPayment.paymentIntent;
    }
  });

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

export default confirmCheckout;
