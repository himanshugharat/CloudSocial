import React from "react";
import Container from "react-bootstrap/Container";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import TitleButton from "../component/navBar/TitleButton";
import "../styles/resource.css";
import logo from "../asset/image/cards-graphic.svg";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
const Resource = () => {
  return (
    <Container>
      <div className="back">
        <div className="title">Resource</div>
        <div className="bttonn">
          <TitleButton></TitleButton>
        </div>
        <div className="bttonn">
          <img src={logo} alt="" className="img" />
        </div>
        <div className="bttonn">
          <ButtonGroup aria-label="Basic example">
            <LinkContainer to="/Resources/video">
              <Button variant="secondary">Getting started Videos</Button>
            </LinkContainer>
            <LinkContainer to="/Resources/literature">
              <Button variant="secondary">literature</Button>
            </LinkContainer>
          </ButtonGroup>
        </div>
      </div>
      <div className="bttonn">
        <h1>Social Media Resources</h1>
      </div>
    </Container>
  );
};

export default Resource;
