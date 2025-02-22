import { useState } from "react";
import "./App.css";
import Weather from "./API_call";

function App() {
  const [showWeather, setShowWeather] = useState(false);
  return (
    <div>
      <button onClick={() => setShowWeather(true)}>Show Weather!</button>
      {showWeather && <Weather></Weather>}
    </div>
  );
}

export default App;
