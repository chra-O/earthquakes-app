import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function NavbarComp() {
  return (
    <div>
      <Navbar bg="light" variant="light ">
        <Container>
          <Navbar.Brand>
            <Link id="navbarStyle" to="/">Home</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
