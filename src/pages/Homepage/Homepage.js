import React from "react";
import ContestArea from "../../components/ContestArea/ContestArea";
import ResultArea from "../../components/ResultArea/ResultArea";
import { Border, LeftSide, Main, RightSide } from "./styled";

const Homepage = () => {
  return (
    <Main>
      <LeftSide>
        <ContestArea />
      </LeftSide>
      <Border />
      <RightSide>
        <ResultArea />
      </RightSide>
    </Main>
  );
};

export default Homepage;
