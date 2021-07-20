
import {
    COMPUTER_LEAD_REQUEST,
    COMPUTER_LEAD_SUCCESS,
    COMPUTER_LEAD_FAIL,
    COMPUTER_LEAD_RESET
} from '../constants/computerConstants'

export const computerLeadsReducer = (state={}, action) => {
    switch(action.type) {
        case COMPUTER_LEAD_REQUEST:
            return {loading: true}
        case COMPUTER_LEAD_SUCCESS:
            return { loading: false, success: true, lead: action.payload}
        case COMPUTER_LEAD_FAIL:
            return { loading: false, error: action.payload }
        case COMPUTER_LEAD_RESET:
            return {}
        default:
            return state 
    }
}