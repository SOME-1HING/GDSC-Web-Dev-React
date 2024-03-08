import { FaClock } from "react-icons/fa";
import Wrapper from "../context/WrapperStyle";
import styled from "styled-components";
import WeatherData from "../context/WeatherData";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  padding-left: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 1.2rem;
  color: #70808d;
  padding-bottom: 10px;
  margin-right: 25px;

  border-bottom: 1px solid #70808d;

  svg {
    margin-right: 10px;
  }
`;

const ForecastContainer = styled.div`
  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;
  margin-right: 25px;
`;

const Forecast = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  color: white;

  width: 100px;
  height: 100px;
`;

const ForecastTime = styled.div`
  font-size: 0.8rem;
`;
const ForecastTemp = styled.div`
  font-size: 1.2rem;
`;
const ForecastIcon = styled.div`
  width: 50px;
  height: 50px;
`;
const HourlyForecast: React.FC<{
  weatherData: WeatherData | null;
}> = ({ weatherData }) => {
  let i = 24;
  return (
    <Wrapper>
      <Container>
        <Header>
          <FaClock />
          HOURLY FORECAST
        </Header>

        <ForecastContainer>
          {weatherData?.forecast.forecastday[0].hour
            .filter((hour) => {
              const currentHour = new Date().getHours();
              const hourTime = new Date(hour.time).getHours();
              return hourTime >= currentHour;
            })
            .map((hour, index) => {
              i--;
              return (
                <div
                  style={{
                    display: "inline-block",
                  }}
                >
                  <Forecast key={hour.time}>
                    <ForecastTime>
                      {index === 0 ? "Now" : hour.time.split(" ")[1]}
                    </ForecastTime>
                    <ForecastTemp>{hour.temp_c}°C</ForecastTemp>
                    <ForecastIcon>
                      <img
                        style={{
                          width: "50px",
                          height: "50px",
                        }}
                        src={hour.condition.icon}
                        alt={hour.condition.text}
                      />
                    </ForecastIcon>
                  </Forecast>
                </div>
              );
            })}
          {weatherData?.forecast.forecastday[1].hour.map((hour) => {
            if (i > 0) {
              i--;
              return (
                <div
                  style={{
                    display: "inline-block",
                  }}
                >
                  <Forecast key={hour.time}>
                    <ForecastTime>{hour.time.split(" ")[1]}</ForecastTime>
                    <ForecastTemp>{hour.temp_c}°C</ForecastTemp>
                    <ForecastIcon>
                      <img
                        style={{
                          width: "50px",
                          height: "50px",
                        }}
                        src={hour.condition.icon}
                        alt={hour.condition.text}
                      />
                    </ForecastIcon>
                  </Forecast>
                </div>
              );
            }
          })}
        </ForecastContainer>
      </Container>
    </Wrapper>
  );
};

export default HourlyForecast;
