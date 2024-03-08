import styled from "styled-components";
import Wrapper from "../context/WrapperStyle";
import { FaSun } from "react-icons/fa";
import WeatherData from "../context/WeatherData";
interface UVScaleProps {
  uvIndex: number | undefined;
}
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

  svg {
    margin-right: 10px;
  }
`;

const UVIndexContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const UVValue = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
`;
const CurrUVIndex = styled.div`
  font-size: 2.2rem;
  color: #fff;
`;
const Scale = styled.div`
  font-size: 1.5rem;
  color: #fff;
`;

const UVScale: React.FC<UVScaleProps> = ({ uvIndex }) => {
  return (
    <div
      style={{
        width: "90%",
        height: "20px",
        borderRadius: "10px",
        background:
          "linear-gradient(to right, green, yellow, orange, red, purple)",
        position: "relative",
      }}
    >
      <div
        style={{
          content: "",
          position: "absolute",
          top: "50%",
          left: uvIndex ? uvIndex * 10 + "%" : "0%",
          transform: "translate(-50%, -50%)",
          width: "20px",
          height: "20px",
          background: "white",
          borderRadius: "50%",
        }}
      ></div>
    </div>
  );
};
const UVIndex: React.FC<{
  weatherData: WeatherData | null;
}> = ({ weatherData }) => {
  function getUVCategory(uvIndex: number): string {
    if (uvIndex < 3) {
      return "Low";
    } else if (uvIndex < 6) {
      return "Moderate";
    } else if (uvIndex < 8) {
      return "High";
    } else if (uvIndex < 11) {
      return "Very High";
    } else {
      return "Extreme";
    }
  }

  return (
    <Wrapper style={{ width: "19vw" }}>
      <Container>
        <Header>
          <FaSun /> UV Index
        </Header>
        <UVIndexContainer>
          <UVValue>
            <CurrUVIndex>{weatherData?.current.uv}</CurrUVIndex>
            <Scale>
              {weatherData ? getUVCategory(weatherData?.current.uv) : ""}
            </Scale>
          </UVValue>
          <UVScale uvIndex={weatherData?.current.uv} />
        </UVIndexContainer>
      </Container>
    </Wrapper>
  );
};

export default UVIndex;
