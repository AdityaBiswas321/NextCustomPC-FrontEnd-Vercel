import React from "react";
import { useSelector } from "react-redux";

//Archived code, remove later
const useLead = () => {
  const computerLead = useSelector((state) => state.computerLeads);
  const { lead } = computerLead;

  return { lead };
};

export default useLead;
