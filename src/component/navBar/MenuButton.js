import React from "react";
import { Dropdown } from "react-bootstrap";
import "../../styles/menuButton.css";
const MenuButton = () => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown">
          Login
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">CloudSocial</Dropdown.Item>
          <Dropdown.Item href="#/action-2">CloudInfluence</Dropdown.Item>
          <Dropdown.Item href="#/action-3">CloudStream</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default MenuButton;
