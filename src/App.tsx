import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Insider = styled.div`
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <Insider>hello world!</Insider>
    </Container>
  );
}

export default App;
