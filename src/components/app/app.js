import React, { Component } from "react";
import ReactDom from "react-dom";
import "./app.css";
import Header from "../header/header";

class App extends Component {
  render() {
    return <Header title="React App" />;
  }
}

ReactDom.render(<App />, document.getElementById("root"));
