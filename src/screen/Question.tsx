import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-flow: column;
`;

const ButtonList = styled.div`
  display: flex;
  flex-flow: column;
  border-radius: 30px;
  background-color: #fff;
  width: 600px;
  height: 300px;
  justify-content: space-around;
  align-items: center;
`;

interface MatchParams {
  id: string;
}

interface IStatement {
  question: string;
  answer: Answer[];
}

const questionList = [
  {
    question: "당신은 외향적입니까",
    answer: [
      {
        indicator: "EI",
        title: "네",
        score: 1,
      },
      {
        indicator: "EI",
        title: "아니오",
        score: 0,
      },
    ],
  },
  {
    question: "당신은 감각적입니까",
    answer: [
      {
        indicator: "SN",
        title: "네 감각적입니다",
        score: 1,
      },
      {
        indicator: "SN",
        title: "아니오 직관적입니다",
        score: 0,
      },
    ],
  },
  {
    question: "당신은 사실이 중요합니까",
    answer: [
      {
        indicator: "TF",
        title: "네 사실이 중요합니다.",
        score: 1,
      },
      {
        indicator: "TF",
        title: "아니오 관계가 더 우선입니다.",
        score: 0,
      },
    ],
  },
  {
    question: "당신은 계획적입니까?",
    answer: [
      {
        indicator: "JP",
        title: "계획적이예요!",
        score: 1,
      },
      {
        indicator: "JP",
        title: "즉흥적입니다.",
        score: 0,
      },
    ],
  },
];

const Question = ({ match }: RouteComponentProps<MatchParams>) => {
  const [answers, setAnswers] = useState([] as MAnswer[]);
  const currentCount = parseInt(match.params.id);
  const questionStatements = questionList[currentCount - 1] as IStatement;

  function getNetxUrl(newAnswer: Answer) {
    console.log("generate");
    if (currentCount < questionList.length) {
      return `/question/${currentCount + 1}`;
    }
    let minified = { ...newAnswer, title: undefined };
    let tmpAnswer = [...answers];
    tmpAnswer.push(minified);
    return `/calculating/${JSON.stringify(tmpAnswer)}`;
  }

  function save(newAnswer: Answer) {
    let aa: MAnswer[] = [...answers];
    let minified = { ...newAnswer, title: undefined };
    aa[currentCount - 1] = minified;
    setAnswers(aa);
  }

  useEffect(() => {
    if (currentCount === 1) {
      setAnswers([]);
    }
  }, []);

  return (
    <Container>
      <ButtonList>
        <h1>{questionStatements.question}</h1>
        {questionStatements.answer.map((item, index) => {
          return (
            <Link key={item.title} to={() => getNetxUrl(item)}>
              <button onClick={() => save(item)}>{item.title}</button>
            </Link>
          );
        })}
      </ButtonList>
    </Container>
  );
};

export default Question;
