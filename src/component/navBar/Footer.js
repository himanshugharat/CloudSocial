import React from "react";
import Card from "react-bootstrap/Card";
import Facebook from "@material-ui/icons/Facebook";
import Twitter from "@material-ui/icons/Twitter";
import WhatsApp from "@material-ui/icons/WhatsApp";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Youtube from "@material-ui/icons/YouTube";
import Instagram from "@material-ui/icons/Instagram";
import Mail from "@material-ui/icons/Mail";
import "../../styles/footer.css";
import Badge from "react-bootstrap/Badge";

const Footer = () => {
  return (
    <div>
      <Card>
        <Card.Title>
          <div className="icon">
            <Facebook className="design" />
            <Twitter className="design" />
            <WhatsApp className="design" />
            <LinkedIn className="design" />
            <Youtube className="design" />
            <Instagram className="design" />
            <Mail className="design" />
          </div>
        </Card.Title>
        <Card.Title>
          <div className="footer">
            <Card.Subtitle className="data">
              Copyright @ 2020 CloudSocial Technologies Pte Ltd.
            </Card.Subtitle>
            <div className="policy">
              <Card.Subtitle className="data">FAQ</Card.Subtitle>
              <Card.Subtitle className="data">Terms of Service</Card.Subtitle>
              <Card.Subtitle className="data">Privacy & Policy</Card.Subtitle>
            </div>
            <Card.Subtitle className="policy">
              <Badge variant="warning">1</Badge>
              <Badge variant="warning">3</Badge>
              <Badge variant="warning">4</Badge>
            </Card.Subtitle>
          </div>
        </Card.Title>
      </Card>
    </div>
  );
};

export default Footer;
