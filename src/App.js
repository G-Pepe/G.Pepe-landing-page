import React from "react";
import Container from "./Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { ToDoApp } from "./ToDoApp";
import { WeatherApp } from "./WeatherApp";
import "./App.css";
import { Googlebar } from "./Googlebar";
import torre from "./torre.jpg";

const App = () => {
  return (
    <Container>
      <Row>
        <Col
          style={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            /* height: "70vh", */
            backgroundColor: "yellow",
          }}
        >
          <WeatherApp />
        </Col>
        <Col
          xs={5}
          style={{
            backgroundImage: `url(${torre}) `,
            backgroundSize: "cover",
            height: "100vh",
          }}
        >
          <Googlebar />
        </Col>
        <Col style={{ backgroundColor: "rgb(185, 211, 192)" }}>
          <ToDoApp></ToDoApp>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
