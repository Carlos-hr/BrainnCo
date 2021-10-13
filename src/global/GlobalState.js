import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";
import { BASE_URL } from "../constants/urls";
import useRequestData from "../hooks/useRequestData";
import { useEffect } from "react/cjs/react.development";
import { getContestResult } from "../services/getContestResult";

const GlobalState = (props) => {
  const [loteryId, setLoteryId] = useState(0);
  const [result, setResult] = useState();

  const { data: loteryContests } = useRequestData(
    `${BASE_URL}/loterias-concursos`,
    []
  );

  const contestId =
    loteryContests[loteryId] && loteryContests[loteryId].concursoId;

  useEffect(() => {
    contestId && getContestResult(contestId, setResult);
  }, [contestId]);

  const data = { result, loteryId, setLoteryId };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
