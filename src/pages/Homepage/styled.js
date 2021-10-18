import styled from "styled-components";
import { RESULT } from "../../constants/colors";

export const Main = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: lightblue;
`;

export const LeftSide = styled.div`
  width: 50vw;
  @media screen and (max-width: 600px) {
    width: 40vw;
  }
`;

export const Border = styled.div`
  width: 10vw;
  height: 100vh;
  max-height: 100vh;
  background-color: ${RESULT};
  position: absolute;
  left: 25vw;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  @media screen and (max-width: 600px) {
    width: 8vw;
    left: 25vw;
  }
  @media screen and (max-width: 426px) {
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    border-top-left-radius: 0%;
    transform: rotate(180deg);
    width: 100vw;
    height: 5vh;
    position: absolute;
    top: 50vh;
    left: 0;
  }
`;

export const RightSide = styled.div`
  width: 100vw;
  z-index: 1;
`;
