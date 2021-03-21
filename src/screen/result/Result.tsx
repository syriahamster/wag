import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";

import ISTJ from "./ISTJ.png";
import ISFJ from "./ISFJ.png";
import INFJ from "./INFJ.png";
import INTJ from "./INTJ.png";
import ISTP from "./ISTP.png";
import ISFP from "./ISFP.png";
import INFP from "./INFP.png";
import INTP from "./INTP.png";
import ESTP from "./ESTP.png";
import ESFP from "./ESFP.png";
import ENFP from "./ENFP.png";
import ENTP from "./ENTP.png";
import ESTJ from "./ESTJ.png";
import ESFJ from "./ESFJ.png";
import ENFJ from "./ENFJ.png";
import ENTJ from "./ENTJ.png";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
`;

const MainBox = styled.div`
  display: flex;
  flex-flow: column;
  border-radius: 30px;
  background-color: #fff;
  width: 600px;
  justify-content: space-around;
  align-items: center;
`;

const SubBox = styled.div`
  display: flex;
  flex-flow: column;
  border-radius: 30px;
  background-color: #fff;
  width: 600px;
  justify-content: space-around;
  align-items: center;

  margin-top: 30px;
`;

const MatchBox = styled.div`
  display: flex;
  flex-flow: row;
  background-color: #fff;
  align-items: center;
`;

const MatchItem = styled.div`
  background-color: #fff;
  justify-content: space-around;
  align-items: center;
`;

const ShareBox = styled.div`
  display: flex;
  flex-flow: column;
  border-radius: 30px;
  width: 600px;
  height: 100px;
  margin-top: 30px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

const ShareTitle = styled.div`
  flex: 1;
  height: 10;
`;
const ShareRow = styled.div`
  flex: 1;
  display: flex;
  width: 100px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

interface MatchParams {
  id: string;
}

const resultMap = [
  {
    type: "ISTJ",
    title: "내향적이고 감각적이며, 사실을 중시하고 계획적인 지",
    img: ISTJ,
  },
  {
    type: "ISFJ",
    title: "내향적이고 감각적이며, 관계를 중시하고 계획적인 지",
    img: ISFJ,
  },
  {
    type: "INFJ",
    title: "내향적이고 직관적이며, 관계를 중시하고 계획적인 지",
    img: INFJ,
  },
  {
    type: "INTJ",
    title: "내향적이고 직관적이며, 사실을 중시하고 계획적인 지",
    img: INTJ,
  },
  {
    type: "ISTP",
    title: "내향적이고 감각적이며, 사실을 중시하고 즉흥적인 지",
    img: ISTP,
  },
  {
    type: "ISFP",
    title: "내향적이고 감각적이며, 관계를 중시하고 즉흥적인 지",
    img: ISFP,
  },
  {
    type: "INFP",
    title: "내향적이고 직관적이며, 관계를 중시하고 즉흥적인 지",
    img: INFP,
  },
  {
    type: "INTP",
    title: "내향적이고 직관적이며, 사실을 중시하고 즉흥적인 지",
    img: INTP,
  },
  {
    type: "ESTP",
    title: "외향적이고 감각적이며, 사실을 중시하고 즉흥적인 지",
    img: ESTP,
  },
  {
    type: "ESFP",
    title: "외향적이고 감각적이며, 관계를 중시하고 즉흥적인 지",
    img: ESFP,
  },
  {
    type: "ENFP",
    title: "외향적이고 직관적이며, 관계를 중시하고 즉흥적인 지",
    img: ENFP,
  },
  {
    type: "ENTP",
    title: "외향적이고 직관적이며, 사실을 중시하고 즉흥적인 지",
    img: ENTP,
  },
  {
    type: "ESTJ",
    title: "외향적이고 감각적이며, 사실을 중시하고 계획적인 지",
    img: ESTJ,
  },
  {
    type: "ESFJ",
    title: "외향적이고 감각적이며, 관계를 중시하고 계획적인 지",
    img: ESFJ,
  },
  {
    type: "ENFJ",
    title: "외향적이고 직관적이며, 관계를 중시하고 계획적인 지",
    img: ENFJ,
  },
  {
    type: "ENTJ",
    title: "외향적이고 직관적이며, 사실을 중시하고 계획적인 지",
    img: ENTJ,
  },
];

const Result = ({ match }: RouteComponentProps<MatchParams>) => {
  const resultId = parseInt(match.params.id);
  const result = resultMap[resultId - 1];
  const nexturl = `/result/${resultId + 1}`;
  // const [result, setResult] = useState(resultMap[match.params.id]);

  return (
    <Container>
      <MainBox>
        <h1>난 {result.title}!</h1>
        <img src={result.img} /> ▲지그림이 들어올 자리
        <p>
          특징1<p>설명</p>
        </p>
        <p>
          특징2<p>설명</p>
        </p>
        <p>
          특징3<p>설명</p>
        </p>
      </MainBox>
      <SubBox>
        <span>나랑 같은 유형 수: 1.25%</span>
        <MatchBox>
          <MatchItem>a</MatchItem>
          <MatchItem>a</MatchItem>
        </MatchBox>
        <Link to="/">
          <button>테스트 다시하기</button>
        </Link>
      </SubBox>
      <ShareBox>
        <ShareTitle>결과 공유하기</ShareTitle>
        <ShareRow>
          <div>Kakao</div>
          <div>Facebook</div>
          <div>Twitter</div>
          <div>Link</div>
        </ShareRow>
      </ShareBox>
      About us <br></br>copyright
    </Container>
  );
};

export default Result;
