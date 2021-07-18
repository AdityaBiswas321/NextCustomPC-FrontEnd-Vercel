import axios from 'axios'
import { API_URL } from '../config/index'
import {
    COMPUTER_LEAD_REQUEST,
    COMPUTER_LEAD_SUCCESS,
    COMPUTER_LEAD_FAIL,
    COMPUTER_LEAD_RESET
} from '../constants/computerConstants'

export const saveLeadForm = () => async (dispatch) => {
    try {
        dispatch({ type: COMPUTER_LEAD_REQUEST})
        const { data } = await axios.get(`${API_URL}/api/lead`)
        console.log(data)
        dispatch({ type: COMPUTER_LEAD_SUCCESS, payload: data})
        
    } catch (error) {
        dispatch({ type: COMPUTER_LEAD_FAIL, payload: error.response})
        
    }
}