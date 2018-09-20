import React, { Component } from "react";
import axios from "axios";
import Friend from "./components/Friend";
import AddFriendForm from "./components/FriendsForm";

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

  formChange = event => {
    this.setState({
      [`current${event.currentTarget.name}`]: event.currentTarget.value
    });
    console.log(event.currentTarget.value);
  };

  addFriend = event => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/friends", {
        name: this.state.currentname,
        age: this.state.currentage,
        email: this.state.currentemail
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <section className="App">
        <h1>Friends</h1>
        <AddFriendForm formChange={this.formChange} addFriend={this.addFriend}/>
        <Friend friend={this.state.friend} />
      </section>
    );
  }
}

export default App;
