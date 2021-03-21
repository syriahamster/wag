import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Share from "./component/Share";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
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
  display: flex;
  flex: 1;
  flex-flow: column;
  align-items: center;
`;

const StartButton = styled.button`
  flex: 1;
  border-radius: 30px;
  width: 100px;
  height: 50px;
`;

const Count = styled.div`
  flex: 1;
  height: 10;
`;

function Home() {
  return (
    <Container>
      <MainBox>
        <Title>당신은 어떤 지인가요?</Title>
        <StartButtonBox>
          <Count>참여자 수: 250,867 명</Count>
          <Link to="/question/1">
            <StartButton>테스트 시작!</StartButton>
          </Link>
        </StartButtonBox>
      </MainBox>
      <Share title="테스트 공유하기" url="exaple.com" />
      About us <br></br>copyright
    </Container>
  );
}

export default Home;
