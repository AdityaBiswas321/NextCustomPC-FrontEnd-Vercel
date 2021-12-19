import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

//Header
//DynamicComponentWithNoSSR is needed for the livechat as it does not work with SSR

const Header = () => {
  const DynamicComponentWithNoSSR = dynamic(() => import("react-livechat"), {
    ssr: false,
  });

  // <NavDropdown title="Dropdown" id="basic-nav-dropdown">
  //               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
  //               <NavDropdown.Item href="#action/3.2">
  //                 Another action
  //               </NavDropdown.Item>
  //               <NavDropdown.Item href="#action/3.3">
  //                 Something
  //               </NavDropdown.Item>
  //               <NavDropdown.Divider />
  //               <NavDropdown.Item href="#action/3.4">
  //                 Separated link
  //               </NavDropdown.Item>
  //             </NavDropdown>

  return (
    <div>
      <DynamicComponentWithNoSSR license={"13099728"} />
      <div></div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link href="/">
              <a>NPX Computers</a>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/">About Us</Nav.Link>
              <Nav.Link href="/computer1">Product Selection</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
