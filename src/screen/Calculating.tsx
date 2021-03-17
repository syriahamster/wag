import React from "react";
import { useHistory } from "react-router-dom";

function Calculating() {
  let history = useHistory();

  function switchResult() {
    let ei = window.localStorage.getItem("sumEI");
    let sumEI = ei ? parseInt(ei) : 0;
    if (sumEI > 10) {
      history.push("/result/1");
    } else {
      history.push("/result/2");
    }
  }

  return (
    <>
      <h1>계산중...</h1>
      <button onClick={switchResult}>
        시간이 지나면 <br />
        결과 페이지로 이동
      </button>
    </>
  );
}

export default Calculating;
