import styled from "styled-components";
import WeatherData from "../context/WeatherData";
import wisdom from "../utils/wisdom";
import { FaCloudRain, FaEye, FaTemperatureHigh } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 20px;
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

const Top = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const CurrentWeather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Temp = styled.div`
  font-size: 3rem;
  color: white;
  font-family: "Inter", sans-serif;
  padding: 20px;
`;

const CurrCondition = styled.div`
  font-size: 2rem;
  color: white;
  font-family: "Inter", sans-serif;
  text-transform: capitalize;
`;

const Tips = styled.div`
  padding: 20px;
  font-size: 0.8rem;
  color: white;
  font-family: "Inter", sans-serif;
  text-align: center;
`;

const Bottom = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const ConditionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ConditionWrapperLeft = styled.div`
  display: flex;
`;
const ConditionWrapperRight = styled.div`
  display: flex;
`;
const ConditionContainer = styled.div`
  width: 8vw;
  height: 6vw;
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  flex-wrap: wrap;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ConditionHeader = styled.div`
  font-size: 0.8rem;
  color: #70808d;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;

  svg {
    font-size: 1.5rem;
    margin-right: 5px;
  }
`;

const ConditionValue = styled.div`
  font-size: 1.5rem;
  color: white;
  display: flex;
  align-items: end;
  justify-content: center;
  padding-top: 20px;
`;

const CurrWeather: React.FC<{
  backImage: string;
  weatherData: WeatherData | null;
}> = ({ weatherData, backImage }) => {
  return (
    <Wrapper
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent), url(${backImage})`,
      }}
    >
      {weatherData ? (
        <>
          <Top>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CurrentWeather>
                <Temp>{weatherData["current"]["temp_c"]}°C</Temp>
                <CurrCondition>
                  {weatherData["current"]["condition"]["text"]}
                </CurrCondition>
              </CurrentWeather>
            </div>
            <Tips>
              Today, expect a {weatherData["current"]["condition"]["text"]} day
              with temperatures reaching a maximum of{" "}
              {weatherData.forecast.forecastday[0].day.maxtemp_c}°C.{" "}
              {wisdom(weatherData["current"]["condition"]["text"])}
            </Tips>
          </Top>
          <Bottom>
            <ConditionWrapper>
              <ConditionWrapperLeft>
                <ConditionContainer>
                  <ConditionHeader>
                    <FaTemperatureHigh /> FEELS LIKE
                  </ConditionHeader>
                  <ConditionValue>
                    {weatherData["current"]["feelslike_c"]}°C
                  </ConditionValue>
                </ConditionContainer>
                <ConditionContainer>
                  <ConditionHeader>
                    <FaCloudRain /> PRECIPITATION
                  </ConditionHeader>
                  <ConditionValue>
                    {weatherData["current"]["precip_mm"]}mm
                  </ConditionValue>
                </ConditionContainer>
              </ConditionWrapperLeft>
              <ConditionWrapperRight>
                <ConditionContainer>
                  <ConditionHeader>
                    <FaEye /> VISIBILITY
                  </ConditionHeader>
                  <ConditionValue>
                    {weatherData["current"]["vis_km"]}km
                  </ConditionValue>
                </ConditionContainer>
                <ConditionContainer>
                  <ConditionHeader>
                    <FaDroplet /> HUMIDITY
                  </ConditionHeader>
                  <ConditionValue>
                    {weatherData["current"]["humidity"]}%
                  </ConditionValue>
                </ConditionContainer>
              </ConditionWrapperRight>
            </ConditionWrapper>
          </Bottom>
        </>
      ) : (
        <p>Select a City</p>
      )}
    </Wrapper>
  );
};

export default CurrWeather;
