import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from  'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {createWrapper, Context, HYDRATE} from 'next-redux-wrapper';
import {
    computerLeadsReducer
} from './reducers/computerReducers'

const reducer = combineReducers({
    computerLeads: computerLeadsReducer
})

const middleware = [thunk]
const makeStore = context => createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));


export const wrapper = createWrapper(makeStore, {debug: true});