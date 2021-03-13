import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import SelectScreen from "./screens/SelectScreen/SelectScreen";

const App = () => {
  return (
    <Router>
      <Route path="/" component={HomeScreen} exact />
      <Route path="/select" component={SelectScreen} />
    </Router>
  );
};

export default App;
