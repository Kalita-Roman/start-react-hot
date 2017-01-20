import React, { Component } from 'react';
import './App.scss';

import Label from '../Label/Label.js'

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Label />
      </div>
    );
  }
}