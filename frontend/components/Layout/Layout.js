import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  //A simple layout connection header and footer with main

  return (
    <>
      <Header />
      <main className="mainbody">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
