import {
  STEPONE_CONVERT,
  STEPTWO_CONVERT,
  STEPTHREE_CONVERT,
  STEPFOUR_CONVERT,
  STEPFIVE_CONVERT,
} from "../constants/qualifyConstants";

//Stores information of progression in the form in qualify.js
//Phase signifies the progression in the progress bar
//Phase progressively becomes true to enable links in progressionbar to prior steps in the form but not after

//Steps signifies placement in form, used to switch components based on boolean
export const qualifyReducers = (state = {}, action) => {
  switch (action.type) {
    case STEPONE_CONVERT:
      return {
        step1: true,
        step2: false,
        step3: false,
        step4: false,
        step5: false,
        phase1: true,
        phase2: false,
        phase3: false,
        phase4: false,
        phase5: false,
      };
    case STEPTWO_CONVERT:
      return {
        step1: false,
        step2: true,
        step3: false,
        step4: false,
        step5: false,
        phase1: true,
        phase2: true,
        phase3: false,
        phase4: false,
        phase5: false,
      };
    case STEPTHREE_CONVERT:
      return {
        step1: false,
        step2: false,
        step3: true,
        step4: false,
        step5: false,
        phase1: true,
        phase2: true,
        phase3: true,
        phase4: false,
        phase5: false,
      };
    case STEPFOUR_CONVERT:
      return {
        step1: false,
        step2: false,
        step3: false,
        step4: true,
        step5: false,
        phase1: true,
        phase2: true,
        phase3: true,
        phase4: true,
        phase5: false,
      };
    case STEPFIVE_CONVERT:
      return {
        step1: false,
        step2: false,
        step3: false,
        step4: false,
        step5: true,
        phase1: true,
        phase2: true,
        phase3: true,
        phase4: true,
        phase5: true,
      };
    default:
      return state;
  }
};
