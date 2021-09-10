import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  stepTwo,
  stepThree,
  stepFour,
  stepFive,
} from "../../actions/qualifyActions";

const useQualify = () => {
  const dispatch = useDispatch();

  //Reaction to button click in Qualify.js, updating state & changing to next step of the qualifying logic

  const alertclick = (type) => {
    dispatch(stepTwo());
    setType(type);
  };
  const alertclick2 = (tab) => {
    dispatch(stepThree());
    setTab(tab);
  };
  const alertclick3 = (app) => {
    dispatch(stepFour());
    setApp(app);
  };
  const alertclick4 = (Ctype) => {
    dispatch(stepFive());
    setCtype(Ctype);
  };

  //Data collection for ideal computer generation logic (in progress), or lead form

  //Local state until Qualify.js lead form is submitted. Data transfers to global state, see ../Hooks/useLead.js

  const [type, setType] = useState("");
  const [tab, setTab] = useState("");
  const [app, setApp] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postal, setPostal] = useState("");
  const [Ctype, setCtype] = useState("");

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
  };
};

export default useQualify;
