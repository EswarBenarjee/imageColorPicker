import { useState } from "react";

import NavbarComponent from "./components/Navbar";
import BodyComponent from "./components/Body";

function App() {
  const [hex, setHex] = useState("#000000");
  const [rgb, setRGB] = useState("rgb(0, 0, 0)");

  return (
    <div className="App">
      <NavbarComponent />

      <BodyComponent hex={hex} setHex={setHex} rgb={rgb} setRGB={setRGB} />
    </div>
  );
}

export default App;
