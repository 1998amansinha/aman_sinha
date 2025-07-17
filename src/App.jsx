import React from "react";
import Body from "./Body";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    </div>
  );
};

export default App;
