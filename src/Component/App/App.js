import React from "react";

import "./App.css";
import Header from "../Header/Header";

import Beer from "../Beer/Beer";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Beer />
      </div>
    );
  }
}
export default App;
