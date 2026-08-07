import React, { Component } from "react";

export default class RefWithClass extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    this.focusInputRef = React.createRef();
    this.displayInputValue = () => {
      console.log(this.inputRef.current.value);
    };
    this.focusInput = () => {
      this.focusInputRef.current.focus();
      this.focusInputRef.current.style.backgroundColor = "red";
    };
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.displayInputValue}>Submit</button>

        <input type="text" ref={this.focusInputRef} />
        <button onClick={this.focusInput}>Focus Input</button>
      </div>
    );
  }
}
