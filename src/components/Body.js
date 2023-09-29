import React, { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

import Colors from "./Colors";
import Image from "./Image";
import UploadImage from "./UploadImage";
import History from "./History";

const Body = () => {
  const [hex, setHex] = useState({ code: "#000000", isCopied: false });
  const [rgb, setRgb] = useState({ code: "rgb(0, 0, 0)", isCopied: false });

  const [history, setHistory] = useState(["eswar.jpg"]);

  return (
    <Container className={`containerPad mt-5`} style={{ minHeight: "80vh" }}>
      {!window.EyeDropper ? (
        <div>
          Eyedropper does not work in Mobile Devices. Please check this project
          in Laptop.
        </div>
      ) : (
        <>
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={6}>
              <Image
                img={history[0]}
                hex={hex}
                setHex={setHex}
                rgb={rgb}
                setRgb={setRgb}
              />
            </Col>
            <Col md={6} className="mt-5 mt-md-0 my-3">
              <UploadImage setHistory={setHistory} />
              <Colors hex={hex} setHex={setHex} rgb={rgb} setRgb={setRgb} />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <History history={history} setHistory={setHistory} />
          </Row>
        </>
      )}
    </Container>
  );
};

export default Body;
