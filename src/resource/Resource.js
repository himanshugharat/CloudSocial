import React from "react";
import Container from "react-bootstrap/Container";
import TitleButton from "../component/navBar/TitleButton";
import "../styles/resource.css";
const Resource = () => {
  return (
    <Container>
      <div>
        <div className="title">Resource</div>
        <div className="btn">
          <TitleButton></TitleButton>
        </div>
      </div>
    </Container>
  );
};

export default Resource;
