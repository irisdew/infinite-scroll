import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Detail from "./pages/Detail";
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <div
        style={{
          position: "absolute",
          top: "0",
          background: "linear-gradient(to right, #0575e6, #00f260)",
          width: "100%",
          height: "13px",
        }}
      ></div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/article/:id" component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
