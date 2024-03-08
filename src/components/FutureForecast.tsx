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
const FutureForecast: React.FC<{
  weatherData: WeatherData | null;
}> = ({ weatherData }) => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <FaClock />
          10-DAY FORECAST
        </Header>

        <ForecastContainer>
          {weatherData?.forecast.forecastday.map((day) => {
            const date = new Date(day.date);
            const days = [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ];
            let dayOfWeek = days[date.getDay()];

            const today = new Date();
            const todayDayOfWeek = days[today.getDay()];

            if (dayOfWeek === todayDayOfWeek) {
              dayOfWeek = "Today";
            }

            return (
              <div
                style={{
                  display: "inline-block",
                }}
              >
                <Forecast key={day.date}>
                  <ForecastTime>{dayOfWeek}</ForecastTime>
                  <ForecastTemp>{day.day.avgtemp_c}°C</ForecastTemp>
                  <ForecastIcon>
                    <img
                      style={{
                        width: "50px",
                        height: "50px",
                      }}
                      src={day.day.condition.icon}
                      alt={day.day.condition.text}
                    />
                  </ForecastIcon>
                </Forecast>
              </div>
            );
          })}
        </ForecastContainer>
      </Container>
    </Wrapper>
  );
};

export default FutureForecast;
