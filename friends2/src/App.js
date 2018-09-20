import React, { Component } from "react";
import Friends from "./components/Friends";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentname: "",
      currentage: "",
      currentemail: ""
    };

    this.state = {
      friends: []
    };
  }

  render() {
    return (
      <section className="App">
        <h1>Friends</h1>

        <Friends />
      </section>
    );
  }
}

export default App;
