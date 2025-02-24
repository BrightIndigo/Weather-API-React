import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function DropdownMenu() {
  const [city, setCity] = useState("");

  const handleSelect = (selectedCity: string) => {
    setCity(selectedCity);
  };

  return (
    <DropdownButton id="dropdown-basic-button" title={city || "Wybierz miasto"}>
      <Dropdown.Item as="button" onClick={() => handleSelect("Warszawa")}>
        Warszawa
      </Dropdown.Item>
      <Dropdown.Item as="button" onClick={() => handleSelect("Łódź")}>
        Łódź
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
      <Dropdown.Item as="button" onClick={() => handleSelect("Białystok")}>
        Białystok
      </Dropdown.Item>
      <Dropdown.Item as="button" onClick={() => handleSelect("Rzeszów")}>
        Rzeszów
      </Dropdown.Item>
    </DropdownButton>
  );
}

export default DropdownMenu;
