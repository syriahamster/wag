import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>당신은 어떤 지인가요?</p>
      <Link to="/question/1">
        <button>테스트 시작!</button>
      </Link>
    </>
  );
}

export default Home;
