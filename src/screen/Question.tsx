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
    question: "당신은 이성적입니까",
    answer: [
      {
        indicator: "TF",
        title: "네 일단 생각합니다",
        score: 1,
      },
      {
        indicator: "TF",
        title: "아니오 다 뿌수고 싶은걸 보니 감정이 우선입니다.",
        score: 0,
      },
    ],
  },
  {
    question: "당신은 어떻게 받아들입니까",
    answer: [
      {
        indicator: "JP",
        title: "일단 앞뒤 상황을 듣고 판단을 해봐요.",
        score: 1,
      },
      {
        indicator: "JP",
        title: "보이는게 전부 아닌가요?",
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
