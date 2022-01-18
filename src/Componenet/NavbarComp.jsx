import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default function NavbarComp() {
  return (
    <div>
      <Navbar bg="light" variant="light ">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
