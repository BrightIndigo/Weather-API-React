import { useState } from "react";
import "./App.css";
import Weather from "./API_call";
import DropdownMenu from "./DropdownMenu";

function App() {
  const [showWeather, setShowWeather] = useState(false);
  return (
    <>
      <DropdownMenu />
      <button onClick={() => setShowWeather(true)}>Show Weather!</button>
      {showWeather && <Weather />}
    </>
  );
}

export default App;
