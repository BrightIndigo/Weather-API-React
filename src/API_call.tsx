import { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const CITY = "Warsaw";
  const API_KEY = "6ffaf95c3a11f1a37ce4304b456f22a6";

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data))
      .catch((error) => console.error("BŁĄD!!!", error));
  }, []);

  return (
    <div>
      {weather ? (
        <p>
          Pogoda w {CITY}: {weather.main.temp}°C
        </p>
      ) : (
        <p>Ładowanie danych...</p>
      )}
    </div>
  );
};

export default Weather;
