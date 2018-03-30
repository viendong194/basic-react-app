import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import HomePage from './component/pages/HomePage';
import LoginPage from './component/pages/LoginPage';
class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Route path="/" exact component={HomePage}/>
        <Route path="/login" exact component={LoginPage}/>
      </div>
    );
  }
}

export default App;
