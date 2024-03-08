import { useEffect, useState } from "react";
import { MdLocationPin } from "react-icons/md";
import styled from "styled-components";
import WeatherData from "../context/WeatherData";

interface SearchBarProps {
  onInputChange: (newInputValue: string) => void;
  weatherData: WeatherData | null;
}

const Wrapper = styled.div`
  width: 100%;
  height: 5%;
  border-radius: 20px;

  background-color: var(--default-grey);

  display: flex;
  align-items: center;
  justify-content: start;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 20px;
  padding-right: 20px;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 1px;
  svg {
    margin-right: 10px;
  }
`;

const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  color: #fff;
  width: 100%;
  height: 100%;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 1px;
  outline: none;
`;
const SearchBar: React.FC<SearchBarProps> = ({
  onInputChange,
  weatherData,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = event.target.value;
    setInputValue(newInputValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onInputChange(inputValue);
    }
  };

  useEffect(() => {
    if (weatherData) {
      setInputValue(
        weatherData.location.name +
          ", " +
          weatherData.location.region +
          ", " +
          weatherData.location.country
      );
    }
  }, [weatherData]);

  return (
    <Wrapper>
      <Container>
        <MdLocationPin fill="#fff" />
        <SearchInput
          type="text"
          placeholder="Search for a city"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          value={inputValue}
        />
      </Container>
    </Wrapper>
  );
};

export default SearchBar;
