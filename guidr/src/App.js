import React, { Component } from 'react';
import SignUpLogin from './component/SignUp_Login/SignUpLogin';
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <SignUpLogin />
      </Router>
    );
  }
}

export default App;
