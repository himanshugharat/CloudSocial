import React from "react";
import Card from "react-bootstrap/Card";
import logo from "../../asset/image/Mask Group 17.svg";
import "../../styles/literature.css";
import Menu from "@material-ui/icons/PictureAsPdf";
import { data } from "../JonData/literature";
import { howToData } from "../JonData/literature";
import { Container } from "react-bootstrap";
const Literature = () => {
  return (
    <Container>
      <h1>Guide</h1>
      <div className="Literature">
        {data.map((data) => {
          return (
            <div className="literatureCard">
              <Card style={{ width: "255px", height: "355px" }}>
                <Card.Body className="cover">
                  <Card.Img
                    variant="top"
                    src={logo}
                    style={{ width: "211px", height: "140px" }}
                  />
                </Card.Body>
                <Card.Body className="cardData">
                  {" "}
                  <Card.Subtitle>
                    <div className="dataTitle">{data.title}</div>
                  </Card.Subtitle>
                  <Card.Footer>
                    <div className="literatureTitle">
                      <h6>view</h6>
                      <Menu />
                    </div>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
      <h1>Guide</h1>
      <div className="Literature">
        {howToData.map((data) => {
          return (
            <div className="literatureCard">
              <Card style={{ width: "255px", height: "355px" }}>
                <Card.Body className="cover">
                  <Card.Img
                    variant="top"
                    src={logo}
                    style={{ width: "211px", height: "140px" }}
                  />
                </Card.Body>
                <Card.Body className="cardData">
                  {" "}
                  <Card.Subtitle>
                    <div className="dataTitle">{data.title}</div>
                  </Card.Subtitle>
                  <Card.Footer>
                    <div className="literatureTitle">
                      <h6>view</h6>
                      <Menu />
                    </div>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Literature;
