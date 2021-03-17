import React from "react";
import styled from "styled-components";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Home from "./screen/Home";
import Question from "./screen/Question";
import About from "./screen/About";
import NotFound from "./screen/NotFound";

import Result from "./screen/Result";
import Calculating from "./screen/Calculating";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

//EI, SN, TF, JP

function App() {
  return (
    <Container>
      <Router>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/question/:id" component={Question} />
            <Route path="/calculating" component={Calculating} />
            <Route path="/result/:id" component={Result} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </Router>
    </Container>
  );
}

export default App;
