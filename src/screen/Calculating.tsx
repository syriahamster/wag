import React from "react";
import { useHistory } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";

import styled from "styled-components";
interface MatchParams {
  result: string;
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  border-radius: 30px;
  background-color: #fff;
  width: 600px;
  height: 300px;
  justify-content: space-around;
  align-items: center;
`;

const Calculating = ({ match }: RouteComponentProps<MatchParams>) => {
  let history = useHistory();

  function calculator() {
    const answers: MAnswer[] = JSON.parse(match.params.result);
    const baseline = 0;
    let ei =
      answers
        .filter((item) => item.indicator === "EI")
        .map((item) => item.score)
        .reduce((a, b) => a + b) > baseline
        ? "E"
        : "I";
    let sn =
      answers
        .filter((item) => item.indicator === "SN")
        .map((item) => item.score)
        .reduce((a, b) => a + b) > baseline
        ? "S"
        : "N";
    let tf =
      answers
        .filter((item) => item.indicator === "TF")
        .map((item) => item.score)
        .reduce((a, b) => a + b) > baseline
        ? "T"
        : "F";
    let jp =
      answers
        .filter((item) => item.indicator === "JP")
        .map((item) => item.score)
        .reduce((a, b) => a + b) > baseline
        ? "J"
        : "P";
    console.log(ei + sn + tf + jp);
    return ei + sn + tf + jp;
  }

  function switchResult(result: string) {
    switch (result) {
      case "ISTJ":
        history.push("/result/1");
        break;
      case "ISFJ":
        history.push("/result/2");
        break;
      case "INFJ":
        history.push("/result/3");
        break;
      case "INTJ":
        history.push("/result/4");
        break;
      case "ISTP":
        history.push("/result/5");
        break;
      case "ISFP":
        history.push("/result/6");
        break;
      case "INFP":
        history.push("/result/7");
        break;
      case "INTP":
        history.push("/result/8");
        break;
      case "ESTP":
        history.push("/result/9");
        break;
      case "ESFP":
        history.push("/result/10");
        break;
      case "ENFP":
        history.push("/result/11");
        break;
      case "ENTP":
        history.push("/result/12");
        break;
      case "ESTJ":
        history.push("/result/13");
        break;
      case "ESFJ":
        history.push("/result/14");
        break;
      case "ENFJ":
        history.push("/result/15");
        break;
      case "ENTJ":
        history.push("/result/16");
        break;
      default:
        history.push("/notfound");
        break;
    }
  }

  return (
    <Container>
      <h1>?????????...</h1>
      <button onClick={() => switchResult(calculator())}>
        ????????? ????????? <br />
        ?????? ???????????? ??????
      </button>
    </Container>
  );
};

export default Calculating;
