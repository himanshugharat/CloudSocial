import React from "react";
import { Card, CardDeck, Container } from "react-bootstrap";
import "../../../styles/managedServices.css";
import image from "../../../asset/image/Group 1646.svg";
import icon from "../../../asset/image/arrow-right-circle.svg";
import Youtube from "@material-ui/icons/YouTube";
import Phone from "@material-ui/icons/Phone";
const ManagedServices = () => {
  return (
    <div>
      <Container fluid>
        <div className="serviceCard">
          <div>
            <h1>Managed Services</h1>
            <div className="serviceCard">
              <CardDeck>
                <Card>
                  <Card.Body>
                    <Youtube />
                    <h4>Learn how it works</h4>
                    <a href="#">
                      Click here <img src={icon} alt="" />
                    </a>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body>
                    <Phone />
                    <h4>Schedule a call </h4>
                    <a href="#">
                      Click here <img src={icon} alt="" />
                    </a>
                  </Card.Body>
                </Card>
              </CardDeck>
            </div>
          </div>
          <div>
            <Card.Img src={image} alt="Services image" />
          </div>
        </div>
        <div className="cardInfo">
          <Container>
            <CardDeck>
              <Card>
                <Card.Body className="contentElement">
                  <div>
                    <h1>What is a Social Media Managed Services</h1>
                  </div>
                  <div>
                    <ul>
                      <li>
                        Hassle free social media response management service
                      </li>
                      <li>
                        Trained resources will respond to your prospects and
                        customers queries, requests and complaints
                      </li>
                      <li>
                        On time (within SLA) and contextual response so that a
                        prospect is converted to customer and customer is
                        retained as loyal customer
                      </li>
                    </ul>
                  </div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body className="contentElement">
                  <div>
                    <h1>How it works</h1>
                  </div>
                  <div>
                    <ul>
                      <li>Enhance your brand’s online reputation</li>
                      <li>
                        Lead Nurturing – on time and contextual reply to
                        prospects
                      </li>
                      <li>
                        Escalation Suppressing – on time resolution of customer
                        complaint
                      </li>
                      <li>Real time updates</li>
                    </ul>
                  </div>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body className="contentElement">
                  <div>
                    <h1>How you can benefit</h1>
                  </div>
                  <div>
                    <ul>
                      <li>
                        <span>Enhance your brand’s online reputation</span>
                      </li>
                      <li>
                        <span>
                          {" "}
                          Lead Nurturing – on time and contextual reply to
                          prospects
                        </span>
                      </li>
                      <li>
                        <span>
                          Escalation Suppressing – on time resolution of
                          customer
                        </span>
                        complaint
                      </li>
                      <li>
                        {" "}
                        <span>Real time updates</span>
                      </li>
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </CardDeck>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default ManagedServices;
