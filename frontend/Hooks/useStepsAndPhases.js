import React from "react";
import { useSelector } from "react-redux";
const useOrderSteps = () => {
  //Phases alter the progress bar
  //Updated via Steps Actions, see useQualifyData and qualifyReducer
  const qualify = useSelector((state) => state.qualify);
  const {
    step1,
    step2,
    step3,
    step4,
    step5,
    phase1,
    phase2,
    phase3,
    phase4,
    phase5,
  } = qualify;

  return {
    step1,
    step2,
    step3,
    step4,
    step5,
    phase1,
    phase2,
    phase3,
    phase4,
    phase5,
  };
};

export default useOrderSteps;
