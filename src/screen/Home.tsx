import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-flow: column;
`;

const MainBox = styled.div`
  display: flex;
  flex-flow: column;
  border-radius: 30px;
  background-color: #fff;
  width: 600px;
  height: 300px;
  justify-content: space-around;
  align-items: center;
`;

const Title = styled.div`
  flex: 1;
  font-size: 48px;
`;

const StartButtonBox = styled.div`
  flex: 1;
`;

const StartButton = styled.button`
  flex: 1;
  border-radius: 30px;
  width: 100px;
  height: 50px;
`;

const SubBox = styled.div`
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

const Count = styled.div`
  flex: 1;
  height: 10;
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

function Home() {
  return (
    <Container>
      <MainBox>
        <Title>당신은 어떤 지인가요?</Title>
        <StartButtonBox>
          <Link to="/question/1">
            <StartButton>테스트 시작!</StartButton>
          </Link>
        </StartButtonBox>
      </MainBox>
      <SubBox>
        <Count>참여자 수: 250,867 명</Count>
        <ShareTitle>공유하기</ShareTitle>
        <ShareRow>
          <div>Kakao</div>
          <div>Facebook</div>
          <div>Twitter</div>
          <div>Link</div>
        </ShareRow>
        About us <br></br>copyright
      </SubBox>
    </Container>
  );
}

export default Home;
