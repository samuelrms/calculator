import React from "react";
import Calculator from "./components/Calculator/Calculator";
import { GlobalStyle } from "./components/Styles/GlobalStyles";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Calculator />
    </div>
  );
};

export default App;
