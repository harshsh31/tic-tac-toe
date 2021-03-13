import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./HomeScreen.css";

class HomeScreen extends Component {
  render() {
    return (
      <div className="homeScreenWrapper">
        <div className="homeScreenLogo"></div>
        <div className="title">Choose your play mode</div>
        <Link to="/select">
          <div className="options">
            <button className="option">With AI</button>
            <button className="option">With a friend</button>
          </div>
        </Link>
      </div>
    );
  }
}
const mapStateToProps = (state) => {};
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HomeScreen));
