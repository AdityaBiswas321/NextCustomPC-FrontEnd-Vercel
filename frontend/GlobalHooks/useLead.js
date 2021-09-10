import React from "react";
import { useSelector } from "react-redux";

const useLead = () => {
  const computerLead = useSelector((state) => state.computerLeads);
  const { lead } = computerLead;

  return { lead };
};

export default useLead;
