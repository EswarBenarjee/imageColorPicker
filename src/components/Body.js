import { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import { EyeDropper } from "react-eyedrop";

import { Clipboard, CheckAll } from "react-bootstrap-icons";

function BodyComponent({ hex, setHex, rgb, setRGB }) {
  const [isHexCopied, setIsHexCopied] = useState(false);
  const [isRGBCopied, setIsRGBCopied] = useState(false);

  const [imgSrc, setImgSrc] = useState(null);

  const copyToClipboard = ({ type }) => {
    console.log(type);
    if (type === "RGB") {
      navigator.clipboard.writeText(rgb);
      setIsRGBCopied(true);
      setTimeout(() => {
        setIsRGBCopied(false);
      }, 2500);
    } else {
      navigator.clipboard.writeText(hex);
      setIsHexCopied(true);
      setTimeout(() => {
        setIsHexCopied(false);
      }, 2500);
    }
  };

  const changeColor = ({ rgb, hex }) => {
    setRGB(rgb);
    setHex(hex);
  };

  return (
    <Container className="containerPad" style={{ height: "80vh" }}>
      <Row>
        <Col md={6} className="my-5 my-md-0">
          <Card>
            <EyeDropper onChange={changeColor}>
              <Card.Img
                className="cardImg p-2"
                src={imgSrc ? URL.createObjectURL(imgSrc) : "eswar.jpg"}
              />
            </EyeDropper>
          </Card>
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-evenly px-5">
          <Row>
            <Card>
              <Card.Body className="px-5 py-5">
                <Card.Title>Upload Photo</Card.Title>
                <Card.Text>
                  <input
                    type="file"
                    name="myImage"
                    onChange={(event) => {
                      setImgSrc(event.target.files[0]);
                    }}
                  />
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Card>
              <Card.Body className="px-2 py-5">
                <Card.Title>
                  <span className="roundedDiv div1 me-1"></span>
                  <span className="roundedDiv div2 me-1"></span>
                  <span className="roundedDiv div3 me-3"></span> Colors
                </Card.Title>
                <Card.Text>
                  <span>
                    Hex Value:
                    <span className="mx-3">{hex}</span>
                    {!isHexCopied ? (
                      <Clipboard
                        className="ms-auto"
                        onClick={() => {
                          copyToClipboard({ type: "HEX" });
                        }}
                      />
                    ) : (
                      <CheckAll />
                    )}
                  </span>
                  <br />
                  <span>
                    RGB Value:
                    <span className="mx-3">{rgb}</span>
                    {!isRGBCopied ? (
                      <Clipboard
                        className="ms-auto"
                        onClick={() => {
                          copyToClipboard({ type: "RGB" });
                        }}
                      />
                    ) : (
                      <CheckAll />
                    )}
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default BodyComponent;
