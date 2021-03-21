import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";

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

interface MatchParams {
  id: string;
}
// const resultMap = {
//   ISTJ: {
//     id: 1,
//     type: "ISTJ",
//     title: "내향적이고 감각적이며, 사실을 중시하고 계획적인 지",
//   },
//   ISFJ: {
//     id: 2,
//     type: "ISFJ",
//     title: "내향적이고 감각적이며, 관계를 중시하고 계획적인 지",
//   },
//   INFJ: {
//     id: 3,
//     type: "INFJ",
//     title: "내향적이고 직관적이며, 관계를 중시하고 계획적인 지",
//   },
//   INTJ: {
//     id: 4,
//     type: "INTJ",
//     title: "내향적이고 직관적이며, 사실을 중시하고 계획적인 지",
//   },
//   ISTP: {
//     id: 5,
//     type: "ISTP",
//     title: "내향적이고 감각적이며, 사실을 중시하고 즉흥적인 지",
//   },
//   ISFP: {
//     id: 6,
//     type: "ISFP",
//     title: "내향적이고 감각적이며, 관계를 중시하고 즉흥적인 지",
//   },
//   INFP: {
//     id: 7,
//     type: "INFP",
//     title: "내향적이고 직관적이며, 관계를 중시하고 즉흥적인 지",
//   },
//   INTP: {
//     id: 8,
//     type: "INTP",
//     title: "내향적이고 직관적이며, 사실을 중시하고 즉흥적인 지",
//   },
//   ESTP: {
//     id: 9,
//     type: "ESTP",
//     title: "외향적이고 감각적이며, 사실을 중시하고 즉흥적인 지",
//   },
//   ESFP: {
//     id: 10,
//     type: "ESFP",
//     title: "외향적이고 감각적이며, 관계를 중시하고 즉흥적인 지",
//   },
//   ENFP: {
//     id: 11,
//     type: "ESNP",
//     title: "외향적이고 직관적이며, 관계를 중시하고 즉흥적인 지",
//   },
//   ENTP: {
//     id: 12,
//     type: "ESTP",
//     title: "외향적이고 직관적이며, 사실을 중시하고 즉흥적인 지",
//   },
//   ESTJ: {
//     id: 13,
//     type: "ESTJ",
//     title: "외향적이고 직관적이며, 사실을 중시하고 계획적인 지",
//   },
//   ESFJ: {
//     id: 14,
//     type: "ESFJ",
//     title: "외향적이고 감각적이며, 관계를 중시하고 계획적인 지",
//   },
//   ENFJ: {
//     id: 15,
//     type: "ESFJ",
//     title: "외향적이고 직관적이며, 관계를 중시하고 계획적인 지",
//   },
//   ENTJ: {
//     id: 16,
//     type: "ENFJ",
//     title: "외향적이고 직관적이며, 사실을 중시하고 계획적인 지",
//   },
// };

const resultMap = [
  {
    type: "ISTJ",
    title: "내향적이고 감각적이며, 사실을 중시하고 계획적인 지",
  },
  {
    type: "ISFJ",
    title: "내향적이고 감각적이며, 관계를 중시하고 계획적인 지",
  },
  {
    type: "INFJ",
    title: "내향적이고 직관적이며, 관계를 중시하고 계획적인 지",
  },
  {
    type: "INTJ",
    title: "내향적이고 직관적이며, 사실을 중시하고 계획적인 지",
  },
  {
    type: "ISTP",
    title: "내향적이고 감각적이며, 사실을 중시하고 즉흥적인 지",
  },
  {
    type: "ISFP",
    title: "내향적이고 감각적이며, 관계를 중시하고 즉흥적인 지",
  },
  {
    type: "INFP",
    title: "내향적이고 직관적이며, 관계를 중시하고 즉흥적인 지",
  },
  {
    type: "INTP",
    title: "내향적이고 직관적이며, 사실을 중시하고 즉흥적인 지",
  },
  {
    type: "ESTP",
    title: "외향적이고 감각적이며, 사실을 중시하고 즉흥적인 지",
  },
  {
    type: "ESFP",
    title: "외향적이고 감각적이며, 관계를 중시하고 즉흥적인 지",
  },
  {
    type: "ESNP",
    title: "외향적이고 직관적이며, 관계를 중시하고 즉흥적인 지",
  },
  {
    type: "ESTP",
    title: "외향적이고 직관적이며, 사실을 중시하고 즉흥적인 지",
  },
  {
    type: "ESTJ",
    title: "외향적이고 직관적이며, 사실을 중시하고 계획적인 지",
  },
  {
    type: "ESFJ",
    title: "외향적이고 감각적이며, 관계를 중시하고 계획적인 지",
  },
  {
    type: "ESFJ",
    title: "외향적이고 직관적이며, 관계를 중시하고 계획적인 지",
  },
  {
    type: "ENFJ",
    title: "외향적이고 직관적이며, 사실을 중시하고 계획적인 지",
  },
];

const Result = ({ match }: RouteComponentProps<MatchParams>) => {
  const resultId = parseInt(match.params.id);
  const result = resultMap[resultId - 1];
  // const [result, setResult] = useState(resultMap[match.params.id]);

  return (
    <Container>
      <Link to="/">
        <button>시작화면으로 돌아가기</button>
      </Link>
      <h1>난 {result.title}!</h1>
      <p>당신은 너무 예쁩니다!</p>
      <p>당신은 너무 귀엽습니다!</p>
    </Container>
  );
};

export default Result;
