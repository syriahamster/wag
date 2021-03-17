import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1>띠용 여기가 어디지?</h1>
      <p>이상한 곳으로 와버렸어요 ㅠㅠ</p>
      <Link to="/">
        <button>시작화면으로 돌아가기</button>
      </Link>
    </>
  );
}

export default NotFound;
