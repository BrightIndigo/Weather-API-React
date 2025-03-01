import { useEffect, useState } from "react";

type Props = {
  city: string;
  setCity: (value: string) => void;
};

const Weather = ({ city }: Props) => {
  const [weather, setWeather] = useState<any>(null);
  const API_KEY = "";

  useEffect(() => {
    if (!city) return;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Nie udało się pobrać danych");
        }
        return response.json();
      })
      .then((data) => setWeather(data))
      .catch((error) => console.error("BŁĄD!!!", error));
  }, [city]);

  return (
    <div>
      {weather && weather.main ? (
        <p>
          Pogoda w {city}: {weather.main.temp}°C
        </p>
      ) : (
        <p>Wybierz miasto aby zobaczyć pogodę</p>
      )}
    </div>
  );
};

export default Weather;
