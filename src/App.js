import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputs: []
    };
  }

  render() {
    const inputs = this.state.inputs.map(k => {
      return <input ref={this.logRef.bind(this, `dynamic${k}`)} />;
    });
    return (
      <div>
        {inputs}
        <input ref={this.logRef.bind(this, "static")} />
        <button onClick={this.reRender}>re-render</button>
      </div>
    );
  }

  logRef(name, ref) {
    console.log(name, ref);
  }

  reRender = () => {
    let inputs = [];
    if (!this.state.inputs.length) {
      inputs.push(1);
    }
    this.setState({ inputs });
  };
}

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
