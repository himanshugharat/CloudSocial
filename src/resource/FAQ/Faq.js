import React from "react";
import { Container, Nav, Table } from "react-bootstrap";
import "../../styles/faq.css";
import { about, Req, table, pack, note } from "../JonData/faq";
const Faq = () => {
  return (
    <div className="main" style={{ padding: "0" }}>
      <Container>
        <div className="content">
          <Nav
            className="col-md-12 d-none d-md-block  sidebar"
            activeKey="/home"
          >
            <div className="sidebar-sticky"></div>
            <Nav.Item>
              <Nav.Link href="#">About</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#price">Pricing</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#Step">Steps</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <h6>
            <h4>
              <a href="about">About</a>
            </h4>
            <h4 id="about">{about.title}</h4>
            {about.data}
            {about.list.map((data) => {
              return (
                <ul>
                  <li>{data.val}</li>
                </ul>
              );
            })}
            {about.add}
            <div>
              {Req.title}
              {Req.data}
            </div>
            <Table striped bordered hover variant="dark" id="price">
              <thead>
                <tr>
                  {table.th.map((data) => {
                    return <th>{data}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {table.Annually.map((data) => {
                    return <td>{data}</td>;
                  })}
                </tr>
                <tr>
                  {table.Brands.map((data) => {
                    return <td>{data}</td>;
                  })}
                </tr>
                <tr>
                  {table.Roles.map((data) => {
                    return <td>{data}</td>;
                  })}
                </tr>
                <tr>
                  {table.Mentions.map((data) => {
                    return <td>{data}</td>;
                  })}
                </tr>
              </tbody>
            </Table>
            <div>
              <div>{note.detail}</div>
            </div>
            <a href="price" style={{ fontSize: "25px" }}>
              Packs and Pricing
            </a>
            <h5 id="Step">
              {pack.map((data) => {
                return (
                  <div>
                    <h1 style={{ color: "#fff", fontSize: "25px" }}>
                      {data.title}
                    </h1>
                    <h5 style={{ color: "#A2BFDE", fontSize: "16px" }}>
                      {data.detail}
                    </h5>

                    {data.list.map((data) => {
                      return (
                        <ul>
                          <li style={{ color: "#A2BFDE", fontSize: "16px" }}>
                            {data.val}
                          </li>
                        </ul>
                      );
                    })}
                    <ol>
                      {data.role.map((data) => {
                        return (
                          <li style={{ color: "#A2BFDE", fontSize: "16px" }}>
                            {data.val}
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                );
              })}
            </h5>
          </h6>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
