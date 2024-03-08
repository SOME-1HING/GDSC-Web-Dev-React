import { useEffect, useState } from "react";
import { MdLocationPin } from "react-icons/md";
import styled from "styled-components";
import WeatherData from "../context/WeatherData";

interface SearchBarProps {
  onInputChange: (newInputValue: string) => void;
  weatherData: WeatherData | null;
  isError: boolean;
  isLoading: boolean;
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
const LoadingWrapper = styled.div`
  display: flex;
`;
const LoadingCircle = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #fff;
  margin: 6px;
  animation: load 1.5s ease-in-out infinite;

  @keyframes load {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-6px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const LoadingCircle1 = styled(LoadingCircle)`
  animation-delay: 0s;
`;

const LoadingCircle2 = styled(LoadingCircle)`
  animation-delay: 0.33s;
`;

const LoadingCircle3 = styled(LoadingCircle)`
  animation-delay: 0.66s;
`;

const SearchBar: React.FC<SearchBarProps> = ({
  onInputChange,
  weatherData,
  isError,
  isLoading,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = event.target.value;
    setInputValue(newInputValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setIsSubmitted(true);
      onInputChange(inputValue);
    }
  };

  useEffect(() => {
    if (!isLoading) {
      if (weatherData) {
        setInputValue(
          weatherData.location.name +
            ", " +
            weatherData.location.region +
            ", " +
            weatherData.location.country
        );
      }

      if (isError) {
        setInputValue("City not found!");
      }
      setIsSubmitted(false);
    }
  }, [weatherData, isError, isSubmitted, isLoading]);

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

        {isLoading && (
          <LoadingWrapper>
            <LoadingCircle1 key={Math.random()} />
            <LoadingCircle2 key={Math.random()} />
            <LoadingCircle3 key={Math.random()} />
          </LoadingWrapper>
        )}
      </Container>
    </Wrapper>
  );
};

export default SearchBar;
