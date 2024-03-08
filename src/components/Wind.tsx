import styled from "styled-components";
import Wrapper from "../context/WrapperStyle";
import { FaCompass, FaWind } from "react-icons/fa";
import WeatherData from "../context/WeatherData";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;
const Header = styled.div`
  display: flex;
  align-self: start;
  align-items: center;
  justify-content: start;
  font-size: 1.2rem;
  color: #70808d;
  margin-left: 15px;

  padding-bottom: 10px;
  margin-right: 25px;

  svg {
    margin-right: 10px;
  }
`;

const SuperContainer = styled.div`
  margin-left: 20px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
`;

const WindContainerLeft = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;
  width: 80%;
  height: 100%;
`;
const WindWrapper = styled.div`
  display: flex;
`;
const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: #70808d;
  margin: 10px 0;
`;
const WindSpeed = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  font-size: 2.2rem;
  color: #fff;
`;

const WindRight = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  padding-left: 10px;
`;

const WindUnit = styled.div`
  font-size: 1rem;
  color: #b6daf8;
`;
const WindType = styled.div`
  font-size: 1rem;
  color: #fff;
`;

const WindContainerRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  height: 100%;

  font-size: 2.2rem;
  color: #b6daf8;
`;

const WindDirection = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  color: #fff;
`;

const Wind: React.FC<{
  weatherData: WeatherData | null;
}> = ({ weatherData }) => {
  return (
    <Wrapper style={{ width: "19vw" }}>
      <Container>
        <Header>
          <FaWind /> Wind
        </Header>
        <SuperContainer>
          <WindContainerLeft>
            <WindWrapper>
              <WindSpeed>{weatherData?.current.wind_kph}</WindSpeed>
              <WindRight>
                <WindUnit>KMPH</WindUnit>
                <WindType>Wind</WindType>
              </WindRight>
            </WindWrapper>
            <Separator />
            <WindWrapper>
              <WindSpeed>{weatherData?.current.gust_kph}</WindSpeed>
              <WindRight>
                <WindUnit>KMPH</WindUnit>
                <WindType>Gust</WindType>
              </WindRight>
            </WindWrapper>
          </WindContainerLeft>
          <WindContainerRight>
            <FaCompass />

            <WindDirection>{weatherData?.current.wind_dir}</WindDirection>
          </WindContainerRight>
        </SuperContainer>
      </Container>
    </Wrapper>
  );
};

export default Wind;
