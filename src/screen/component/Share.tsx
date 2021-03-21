import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

interface Prop {
  title: string;
  url: string;
}

const Share = ({ title, url }: Prop) => {
  return (
    <ShareBox>
      <ShareTitle>{title}</ShareTitle>
      <ShareRow>
        <div>Kakao</div>
        <div>Facebook</div>
        <div>Twitter</div>
        <div>Link</div>
      </ShareRow>
    </ShareBox>
  );
};

export default Share;
