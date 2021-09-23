import React from "react";
import Router from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  stepTwo,
  stepThree,
  stepFour,
  stepFive,
} from "../../actions/qualifyActions";
import {
  setType,
  setTab,
  setApp,
  setCtype,
} from "../../actions/productActions";

import {
  SET_TYPE,
  SET_TAB,
  SET_APP,
  SET_C_TYPE,
} from "../../constants/productConstants";

import {
  STEPONE_CONVERT,
  STEPTWO_CONVERT,
  STEPTHREE_CONVERT,
  STEPFOUR_CONVERT,
  STEPFIVE_CONVERT,
} from "../../constants/qualifyConstants";

import { saveLeadForm } from "../../actions/computerActions";

import {
  createConfirmCardPayment,
  makePayment,
} from "../../actions/paymentsActions";
import { createPaymentMethod } from "../../actions/paymentsActions";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const useQualify = () => {
  const dispatch = useDispatch();

  const stripe = useStripe();
  const elements = useElements();

  //Reaction to button click in Qualify.js, updating state & changing to next step of the qualifying logic

  const alertclick = (type) => {
    dispatch({ type: STEPTWO_CONVERT });
    dispatch({ type: SET_TYPE, payload: type });
  };
  const alertclick2 = (tab) => {
    dispatch({ type: STEPTHREE_CONVERT });
    dispatch({ type: SET_TAB, payload: tab });
  };
  const alertclick3 = (app) => {
    dispatch({ type: STEPFOUR_CONVERT });
    dispatch({ type: SET_APP, payload: app });
  };
  const alertclick4 = (Ctype) => {
    dispatch({ type: STEPFIVE_CONVERT });
    dispatch({ type: SET_C_TYPE, payload: Ctype });
    Router.push("/product");
  };

  //Data collection for ideal computer generation logic (in progress), or lead form

  //Local state until Qualify.js lead form is submitted. Data transfers to global state, see ../Hooks/useLead.js

  const [type, setType] = useState("");
  const [tab, setTab] = useState("");
  const [app, setApp] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [phone, setPhone] = useState("");
  const [postal, setPostal] = useState("");
  const [Ctype, setCtype] = useState("");

  const price = 30;

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(type);
    console.log(tab);
    console.log(app);
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(postal);
    console.log(Ctype);

    //Save data to global state
    dispatch(
      saveLeadForm({ type, tab, app, name, email, phone, postal, Ctype })
    );

    const billingDetails = {
      name: name,
      email: email,
      address: {
        postal_code: postal,
      },
    };
    const cardElement = elements.getElement(CardElement);

    dispatch(makePayment(price));
    dispatch(createPaymentMethod(cardElement, billingDetails, stripe));
  };

  //return setState for email, name, phone, postal due to onChange on form in Qualify.js

  return {
    type,
    tab,
    app,
    name,
    email,
    phone,
    postal,
    Ctype,
    alertclick,
    alertclick2,
    alertclick3,
    alertclick4,
    setEmail,
    setName,
    setPhone,
    setPostal,
    setAddress,
    setCity,
    setProvince,
    submitHandler,
    stripe,
  };
};

export default useQualify;
