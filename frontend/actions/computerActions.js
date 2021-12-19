import axios from "axios";
import { API_URL } from "../config/index";
import {
  COMPUTER_LEAD_REQUEST,
  COMPUTER_LEAD_SUCCESS,
  COMPUTER_LEAD_FAIL,
  COMPUTER_LEAD_RESET,
} from "../constants/computerConstants";

//Archived code from previous version where I only collected leads
//build payment system instead to process transactions

export const saveLeadForm = (lead) => async (dispatch) => {
  try {
    dispatch({ type: COMPUTER_LEAD_REQUEST });
    const { data } = await axios.post(`${API_URL}/api/lead`, lead);
    console.log(data);
    dispatch({ type: COMPUTER_LEAD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: COMPUTER_LEAD_FAIL, payload: error.response });
  }
};
