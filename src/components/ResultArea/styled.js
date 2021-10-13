import styled from "styled-components";
import { RESULT } from "../../constants/colors";

export const Main = styled.div`
  height: 100vh;
  background-color: ${RESULT};
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media screen and (max-width: 426px) {
    transform: rotate(360deg);
    height: 45vh;
    width: 100vw;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const SortedNumber = styled.div`
  border-radius: 50%;
  background-color: white;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1vh 1vw;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Warning = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  padding-right: 3vw;
  padding-bottom: 3vh;
  text-align: center;
  @media screen and (max-width: 426px) {
    padding-bottom: 1vh;
    padding-top: 3vh;
  }
`;
