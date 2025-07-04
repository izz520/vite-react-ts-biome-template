import "./App.css";
import Button from "@mui/material/Button";
import { useState } from "react";
import PhoneNumberInput from "./components/PhoneNumberInput";

function App() {
  const [_count, _setCountt] = useState(0);

  return (
    <div className="flex">
      <Button variant="contained">Hello world 1111</Button>
      <PhoneNumberInput />
    </div>
  );
}

export default App;
