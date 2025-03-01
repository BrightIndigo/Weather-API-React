import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Weather from "./API_call";

function DropdownMenu() {
  const [city, setCity] = useState("");

  const handleSelect = (selectedCity: string) => {
    setCity(selectedCity);
  };

  return (
    <>
      <DropdownButton
        id="dropdown-basic-button"
        title={city || "Wybierz miasto"}
      >
        <Dropdown.Item as="button" onClick={() => handleSelect("Warsaw")}>
          Warsaw
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => handleSelect("Lodz")}>
          Lodz
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => handleSelect("Bydgoszcz")}>
          Bydgoszcz
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => handleSelect("Radom")}>
          Radom
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => handleSelect("Lublin")}>
          Lublin
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => handleSelect("Bialystok")}>
          Bialystok
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={() => handleSelect("Rzeszow")}>
          Rzeszow
        </Dropdown.Item>
      </DropdownButton>
      <Weather city={city} setCity={setCity} />
    </>
  );
}

export default DropdownMenu;
