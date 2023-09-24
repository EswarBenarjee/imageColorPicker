import React from "react";

import Card from "react-bootstrap/Card";

const UploadImage = ({ setHistory }) => {
  return (
    <Card className="mb-5">
      <Card.Body className="px-5 py-5">
        <Card.Title>Upload Photo</Card.Title>
        <Card.Text>
          <input
            type="file"
            name="myImage"
            onChange={(event) => {
              if (event.target.files[0] === undefined) return;
              setHistory((history) => [event.target.files[0], ...history]);
            }}
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UploadImage;
