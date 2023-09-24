import React from "react";

import { Card } from "react-bootstrap";

import { BsClipboard } from "react-icons/bs";
import { TiTickOutline } from "react-icons/ti";

const Colors = ({ hex, setHex, rgb, setRgb }) => {
  const copyToClipboard = ({ type }) => {
    if (type === "RGB") {
      navigator.clipboard.writeText(rgb.code);
      setRgb({ ...rgb, isCopied: true });

      setTimeout(() => {
        setRgb({ ...rgb, isCopied: false });
      }, 2500);
    } else {
      navigator.clipboard.writeText(hex.code);
      setHex({ ...hex, isCopied: true });

      setTimeout(() => {
        setHex({ ...hex, isCopied: false });
      }, 2500);
    }
  };

  return (
    <Card>
      <Card.Body className="px-5 py-5">
        <Card.Title>
          <span className="roundedDiv div1 me-1"></span>
          <span className="roundedDiv div2 me-1"></span>
          <span className="roundedDiv div3 me-3"></span> Colors
        </Card.Title>
        <Card.Text>
          <span>Click on image to open the dropper</span>
          <br />
          <span>
            Hex Value:
            <span className="mx-3">{hex.code}</span>
            {!hex.isCopied ? (
              <BsClipboard
                className="ms-auto"
                onClick={() => {
                  copyToClipboard({ type: "HEX" });
                }}
              />
            ) : (
              <TiTickOutline />
            )}
          </span>
          <br />
          <span>
            RGB Value:
            <span className="mx-3">{rgb.code}</span>
            {!rgb.isCopied ? (
              <BsClipboard
                className="ms-auto"
                onClick={() => {
                  copyToClipboard({ type: "RGB" });
                }}
              />
            ) : (
              <TiTickOutline />
            )}
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Colors;
