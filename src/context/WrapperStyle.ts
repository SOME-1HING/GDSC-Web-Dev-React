import styled from "styled-components";

const Wrapper = styled.div`
  width: 38vw;
  height: 25vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 5px;
  margin-right: 5px;
  background-color: rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    width: 80vw;
    height: 25vh;
    margin: 5px;
    margin-top: 10px;
  }
`;

export default Wrapper;
