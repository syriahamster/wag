import React from "react";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";

interface MatchParams {
  id: string;
}

const Result = ({ match }: RouteComponentProps<MatchParams>) => {
  const resultId = parseInt(match.params.id);

  function getResultTitle(id: number) {
    if (resultId === 1) {
      return "밖을 돌아다니기 좋아하는 지!";
    } else {
      return "집에 있는게 너무나 좋은 지!";
    }
  }

  return (
    <>
      <Link to="/">
        <button>시작화면으로 돌아가기</button>
      </Link>
      <h1>난 왜 이렇게 {getResultTitle(resultId)}!</h1>
      <p>당신은 너무 예쁩니다!</p>
      <p>당신은 너무 귀엽습니다!</p>
    </>
  );
};

export default Result;
