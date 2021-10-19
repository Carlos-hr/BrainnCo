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
    min-height: 45vh;
    max-height: fit-content;
    margin-top: 55vh;
    position: absolute;
    left: 0;
    justify-content: space-between;
    flex-grow: 1;
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
  height: fit-content;
  background-color: ${RESULT};
`;

export const Warning = styled.p`
  position: relative;
  bottom: 0;
  right: 0;
  padding-right: 3vw;
  padding-bottom: 3vh;
  text-align: center;
  @media screen and (max-width: 426px) {
    padding-bottom: 1vh;
  }
`;

export const WarningContainer = styled.div`
  background-color: ${RESULT};
`;
