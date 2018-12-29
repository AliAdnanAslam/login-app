/**
 * Module dependencies
 */
import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Layouts/Home'
import Login from './Authentication/Login'

/**
 * Handling the routing of the App
 *
 * @class App
 */

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={ Home } />
          <Route path="/login" component={ Login } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
