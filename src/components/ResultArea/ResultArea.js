import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { Main, ResultContainer, SortedNumber, Warning } from "./styled";

const ContestResult = () => {
  const { result } = useContext(GlobalStateContext);

  const renderResult = () => {
    return (
      result &&
      result.numeros &&
      result.numeros.map((number) => {
        return <SortedNumber key={number}> {number}</SortedNumber>;
      })
    );
  };
  return (
    <Main>
      <ResultContainer>{renderResult()}</ResultContainer>
      <Warning>
        Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a
        CAIXA
      </Warning>
    </Main>
  );
};

export default ContestResult;
