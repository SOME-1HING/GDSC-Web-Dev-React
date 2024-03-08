import "./App.css";
import styled from "styled-components";
import SearchBar from "./components/SearchBar";
import CurrWeather from "./components/CurrWeather";
import { useEffect, useState } from "react";
import WeatherData from "./context/WeatherData";
import getBackground from "./utils/getBackground";
import HourlyForecast from "./components/HourlyForecast";
import FutureForecast from "./components/FutureForecast";
import UVIndex from "./components/UVIndex";
import Wind from "./components/Wind";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.5);
    overflow-y: auto;
  }
`;

const Background = styled.div`
  background-size: cover;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  filter: blur(2px);
`;

const Container = styled.div`
  width: 70vw;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;

  padding: 20px;

  @media (max-width: 768px) {
    width: 90vw;
    height: 100vh;
    flex-direction: column;
    border-radius: 0px;
    background-color: transparent;
    display: block;
    margin-top: 50px;
  }
`;

const Left = styled.div`
  flex: 1.75;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  height: 100%;

  @media (max-width: 768px) {
    flex: 1;
  }
`;
const Right = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-top: 20px;
    width: 100%;
    height: auto;
    flex: 1;
  }
`;

const RightColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const App = () => {
  const [, setSearchInput] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [backgroundImage, setBackgroundImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);

  const handleSearchInputChange = async (newInputValue: string) => {
    setSearchInput(newInputValue);
    setIsLoading(true);
    const forecastWeatherResponse = await fetch(
      `https://sugoi-api.vercel.app/weather?q=${newInputValue}`
    );
    const forecastWeatherData = await forecastWeatherResponse.json();

    if (forecastWeatherData["error"]) {
      setError(true);
      setIsLoading(false);
      return;
    }

    setWeatherData(forecastWeatherData);
    setError(false);

    setIsLoading(false);
  };

  useEffect(() => {
    setBackgroundImage(
      getBackground(weatherData ? weatherData.current.condition.text : "")
    );
  }, [weatherData]);

  return (
    <Wrapper>
      <Background
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
        }}
      />

      <Container>
        <Left>
          <SearchBar
            isLoading={isLoading}
            isError={isError}
            weatherData={weatherData}
            onInputChange={handleSearchInputChange}
          />

          {weatherData && (
            <CurrWeather
              weatherData={weatherData}
              backImage={backgroundImage}
            />
          )}
        </Left>
        <Right>
          {weatherData && (
            <>
              <HourlyForecast weatherData={weatherData} />
              <FutureForecast weatherData={weatherData} />
              <RightColumn>
                <UVIndex weatherData={weatherData} />
                <Wind weatherData={weatherData} />
              </RightColumn>
            </>
          )}
        </Right>
      </Container>
    </Wrapper>
  );
};

export default App;
