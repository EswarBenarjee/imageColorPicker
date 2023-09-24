import React from "react";

import { Row, Col } from "react-bootstrap";

const History = ({ history, setHistory }) => {
  return (
    <Row className="mt-md-5 d-flex justify-content-center align-items-center">
      {history.map((img, index) => {
        return (
          <Col xs={6} md={2} key={index} className="mt-3">
            <img
              src={img === "eswar.jpg" ? img : URL.createObjectURL(img)}
              alt="history"
              className="rounded-circle mx-4"
              style={{ height: "100px", width: "100px" }}
              onClick={() => {
                setHistory([img, ...history.filter((_, i) => i !== index)]);
              }}
            />
          </Col>
        );
      })}
    </Row>
  );
};

export default History;
