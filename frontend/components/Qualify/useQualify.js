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

  const [type, setType] = useState("");
  const [tab, setTab] = useState("");
  const [app, setApp] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [postal, setPostal] = useState("");
  const [Ctype, setCtype] = useState("");

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
  };
};

export default useQualify;
