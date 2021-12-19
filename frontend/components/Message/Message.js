import React from "react";
import { Alert } from "react-bootstrap";

//Message Component: To alert user of a success or fail with a message

const Message = ({ variant, children }) => {
  return (
    <Alert variant={variant} className="text-center">
      {children}
    </Alert>
  );
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
