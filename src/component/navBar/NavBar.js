import React from "react";
import "../../styles/navBar.css";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import TitleButton from "./TitleButton";
import MenuButton from "./MenuButton";
import logo from "../../asset/image/header-logo.png";

const NavBar = () => {
  return (
    <div>
      <Container fluid>
        <Navbar collapseOnSelect expand="lg" color="black" variant="light">
          <Navbar.Brand href="#home">
            <img src={logo}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/Solutions">
                <NavLink>Solutions</NavLink>
              </LinkContainer>
              <LinkContainer to="/Resources">
                <NavLink>Resources</NavLink>
              </LinkContainer>
              <LinkContainer to="/Pricing">
                <NavLink>Pricing</NavLink>
              </LinkContainer>
              <LinkContainer to="/Blog">
                <NavLink>Blog</NavLink>
              </LinkContainer>
              <LinkContainer to="/ScheduleDemo">
                <NavLink>ScheduleDemo</NavLink>
              </LinkContainer>
              <LinkContainer to="/ReferUs">
                <NavLink>Refer Us</NavLink>
              </LinkContainer>
              <LinkContainer to="/ReviewUs">
                <NavLink>Review Us</NavLink>
              </LinkContainer>
            </Nav>
            <Nav className="AppBarBtn">
              <TitleButton />
              <MenuButton />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavBar;
