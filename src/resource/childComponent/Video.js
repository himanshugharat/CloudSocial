import React from "react";
import Card from "react-bootstrap/Card";
import logo from "../../asset/image/Mask Group 17.svg";
import "../../styles/video.css";
import Youtube from "@material-ui/icons/YouTube";
import { video } from "../JonData/videoData";
import { Container } from "react-bootstrap";

const Video = () => {
  return (
    <Container>
      <section className="video">
        {video.map((data) => {
          return (
            <div className="videoCard">
              <Card style={{ width: "333px", height: "275px" }}>
                <Card.Body className="cover">
                  <Card.Img
                    variant="top"
                    src={logo}
                    style={{ width: "211px", height: "140px" }}
                  />
                </Card.Body>
                <Card.Body>
                  <Card.Subtitle>
                    <div className="title">
                      <Card.Subtitle>{data.title}</Card.Subtitle>
                      <Youtube />
                    </div>
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </section>
    </Container>
  );
};

export default Video;
