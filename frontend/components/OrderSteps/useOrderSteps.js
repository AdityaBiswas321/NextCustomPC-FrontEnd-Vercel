import React from "react";
import { useSelector } from "react-redux";
const useOrderSteps = () => {
  //Phases alter the progress bar
  //Updated via Steps Actions, see useQualifyData and qualifyReducer
  const qualify = useSelector((state) => state.qualify);
  const { phase1, phase2, phase3, phase4, phase5 } = qualify;

  return { phase1, phase2, phase3, phase4, phase5 };
};

export default useOrderSteps;
