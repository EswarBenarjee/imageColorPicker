import React from "react";

const Image = ({ img, hex, setHex, rgb, setRgb }) => {
  const openEyeDropper = async () => {
    if (!window.EyeDropper) {
      return;
    }

    const eyeDropper = new window.EyeDropper();

    eyeDropper.open().then((color) => {
      setHex({ ...hex, code: color.sRGBHex });
      setRgb({ ...rgb, code: hexToRgb(color.sRGBHex) });
    });
  };

  const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div onClick={openEyeDropper}>
      <img
        src={img === "eswar.jpg" ? img : URL.createObjectURL(img)}
        className="w-100"
        style={{ maxHeight: "500px" }}
        alt=""
      />
    </div>
  );
};

export default Image;
