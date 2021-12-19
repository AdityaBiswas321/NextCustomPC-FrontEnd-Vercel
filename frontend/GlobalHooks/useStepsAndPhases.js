import React from "react";
import { useSelector } from "react-redux";

//Very Important

const useOrderSteps = () => {
  //All custom hooks that has functionality in multiple components will be in the Global Hooks folder

  //Global state - Steps
  //Steps used in ../components/Qualify/Qualify.js to render JSX based on its boolean values facilitated by ternary operators, tracks form progression
  //Steps switched using actions in ../components/Qualify/useQualifyData.js which are activated by buttons in Qualify.js

  //Global state - phases
  //Phases used in OrderSteps.js to render JSX progressbar based on its boolean values facilitated by ternary operators
  //Phases switched using same actions as Steps

  //Phases has different switching logic, see ../Reducers/qualifyReducers.js

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
