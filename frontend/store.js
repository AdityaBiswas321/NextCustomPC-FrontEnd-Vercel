import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper, Context, HYDRATE } from "next-redux-wrapper";
import { computerLeadsReducer } from "./reducers/computerReducers";
import { shippingReducer } from "./reducers/shippingReducers";
import { validationReducer } from "./reducers/validationReducers";
import { qualifyReducers } from "./reducers/qualifyReducers";
import { paymentsReducer } from "./reducers/paymentsReducers";
import { confirmReducer } from "./reducers/confirmationReducers";
import { productReducers } from "./reducers/productReducers";
import ProductOneReducer from "./ProductData/ProductOne";

//Combine Reducer
const reducer = combineReducers({
  computerLeads: computerLeadsReducer,
  shipping: shippingReducer,
  validation: validationReducer,
  qualify: qualifyReducers,
  payments: paymentsReducer,
  product: productReducers,
  confirm: confirmReducer,
});

//Initial State
const initialState = {
  qualify: {
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
  },
  product: {
    type: "Home Office",
    tab: 3,
    app: 1,
    ctype: 500,
  },
};

//Needed to use Redux with NextJS
const middleware = [thunk];
const makeStore = (context) =>
  createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

//Need wrapper to use NextJs with redux
export const wrapper = createWrapper(makeStore, { debug: true });
