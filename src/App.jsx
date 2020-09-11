import React from "react";
import ReactDOM from "react-dom";

import styled from "styled-components";
import Child from "./child";

const Title = styled.h1`
  color: red;
`;

const App = () => {
  return (
    <>
      <Title>Hello World!</Title>
      <Child />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
