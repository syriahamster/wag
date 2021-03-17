import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RouteComponentProps } from "react-router-dom";

const ButtonList = styled.div`
  display: flex;
  flex-flow: column;
`;

interface MatchParams {
  id: string;
}

interface IStatement {
  indicator: string;
  question: string;
  answer: Answer[];
}

interface Answer {
  title: string;
  score: number;
}

const questionList = [
  {
    indicator: "EI",
    question: "당신은 외향적입니까",
    answer: [
      {
        title: "네",
        score: 1,
      },
      {
        title: "아니오",
        score: 0,
      },
    ],
  },
  {
    indicator: "SN",
    question: "당신은 감각적입니까",
    answer: [
      {
        title: "네 감각적입니다",
        score: 1,
      },
      {
        title: "아니오 직관적입니다",
        score: 0,
      },
    ],
  },
  {
    indicator: "TF",
    question: "당신은 이성적입니까",
    answer: [
      {
        title: "네 일단 생각합니다",
        score: 1,
      },
      {
        title: "아니오 다 뿌수고 싶은걸 보니 감정이 우선입니다.",
        score: 0,
      },
    ],
  },
  {
    indicator: "JP",
    question: "당신은 어떻게 받아들입니까",
    answer: [
      {
        title: "일단 앞뒤 상황을 듣고 판단을 해봐요.",
        score: 1,
      },
      {
        title: "보이는게 전부 아닌가요?",
        score: 0,
      },
    ],
  },
];

const Question = ({ match }: RouteComponentProps<MatchParams>) => {
  const currentCount = parseInt(match.params.id);
  let nextUrl = `/question/${currentCount + 1}`;
  const questionStatements = questionList[currentCount - 1] as IStatement;

  if (currentCount === questionList.length) {
    nextUrl = "/calculating";
  }

  function add(indicator: string, score: number) {
    let data = window.localStorage.getItem(`sum${indicator}`);
    let r = data ? parseInt(data) : 0;
    window.localStorage.setItem(`sum${indicator}`, (r + score).toString());
  }

  useEffect(() => {
    if (currentCount === 1) {
      console.log("초기화! 0");
      //EI, SN, TF, JP
      window.localStorage.setItem("sumEI", "0");
      window.localStorage.setItem("sumSN", "0");
      window.localStorage.setItem("sumTF", "0");
      window.localStorage.setItem("sumJP", "0");
    }
  }, []);

  return (
    <>
      <ButtonList>
        <h1>{questionStatements.question}</h1>
        {questionStatements.answer.map((item, index) => {
          return (
            <Link to={nextUrl}>
              <button
                onClick={() => add(questionStatements.indicator, item.score)}
              >
                {item.title}
              </button>
            </Link>
          );
        })}
      </ButtonList>
    </>
  );
};

export default Question;
