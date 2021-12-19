import {
  STEPONE_CONVERT,
  STEPTWO_CONVERT,
  STEPTHREE_CONVERT,
  STEPFOUR_CONVERT,
  STEPFIVE_CONVERT,
} from "../constants/qualifyConstants";

//Actions to store placement in the algorithm
//Important to conditionally show components based of placement

export const stepOne = () => (dispatch) => {
  try {
    dispatch({ type: STEPONE_CONVERT });
  } catch (error) {
    res.json(error);
  }
};
export const stepTwo = () => (dispatch) => {
  try {
    dispatch({ type: STEPTWO_CONVERT });
  } catch (error) {
    res.json(error);
  }
};
export const stepThree = () => (dispatch) => {
  try {
    dispatch({ type: STEPTHREE_CONVERT });
  } catch (error) {
    res.json(error);
  }
};
export const stepFour = () => (dispatch) => {
  try {
    dispatch({ type: STEPFOUR_CONVERT });
  } catch (error) {
    res.json(error);
  }
};
export const stepFive = () => (dispatch) => {
  try {
    dispatch({ type: STEPFIVE_CONVERT });
  } catch (error) {
    res.json(error);
  }
};
