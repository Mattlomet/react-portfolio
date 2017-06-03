import React, { Component } from "react";
import Header from "./Header";
import Content from "./Content";
import "../Stylesheets/App.css";

class App extends Component {
  render() {
    return (
      <div className="App-div">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
