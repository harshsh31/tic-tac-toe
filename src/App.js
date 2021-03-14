import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen/HomeScreen";

const App = () => {
  return (
    <Router>
      {/* <Route path="/" component={HomeScreen} exact /> */}
      <HomeScreen />
    </Router>
  );
};

export default App;
