import {
    STEPONE_CONVERT,
    STEPTWO_CONVERT,
    STEPTHREE_CONVERT,
    STEPFOUR_CONVERT,
    STEPFIVE_CONVERT,
  } from "../constants/qualifyConstants";

export const qualifyReducers = (state={}, step1=true, action) => {
    switch(action.type) {
        case STEPONE_CONVERT:
            return {step1= true, step2=false, step3=false, step4=false, step5=false}
        case STEPTWO_CONVERT:
            return {step1=false, step2=true, step3=false, step4=false, step5=false}
        case STEPTHREE_CONVERT:
            return {step1=false, step2=false, step3=true, step4=false, step5=false}
        case STEPFOUR_CONVERT:
            return {step1=false, step2=false, step3=false, step4=true, step5=false}
        case STEPFIVE_CONVERT:
            return {step1=false, step2=false,step3=false, step4=false, step5=true}
        default:
            return state
    }
}