import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper, Context, HYDRATE } from "next-redux-wrapper";
import { computerLeadsReducer } from "./reducers/computerReducers";
import { qualifyReducers } from "./reducers/qualifyReducers";
import { paymentsReducer } from "./reducers/paymentsReducers";
import { productReducers } from "./reducers/productReducers";

const reducer = combineReducers({
  computerLeads: computerLeadsReducer,
  qualify: qualifyReducers,
  payments: paymentsReducer,
  product: productReducers,
});

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
};

const middleware = [thunk];
const makeStore = (context) =>
  createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

export const wrapper = createWrapper(makeStore, { debug: true });
