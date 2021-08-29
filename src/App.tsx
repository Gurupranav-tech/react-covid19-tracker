import React, { FC } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";

const App: FC = () => {
  return (
    <Router>
      <Header />
      <div className="my-container">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
