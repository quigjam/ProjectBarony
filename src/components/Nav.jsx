import React from "react";
import { Navbar } from "react-bootstrap";
export default function Nav() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">Barony Campaign</Navbar.Brand>
      <Navbar.Toggle />
    </Navbar>
  );
}
