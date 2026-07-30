import React from "react";
import Function from "./Function";
import ArrowFunction from "./ArrowFunction";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>I am a app component</h1>
        <Function />
        <ArrowFunction />
      </>
    );
  }
}

export default App;
