import React from "react";
import { useSelector } from "react-redux";

const useQualifySteps = () => {
  //global state storing the progress of Qualify.js data collection form

  return { step1, step2, step3, step4, step5 };
};

export default useQualifySteps;
