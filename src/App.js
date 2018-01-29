import React, { Component } from 'react';
import {Link} from 'react-router'

class App extends Component {
  render() {
    return (
      <div>
        <h1>lucy-cai UI 组件</h1>
        <ul>
          <li><Link to="/buttonDemo">Button</Link></li>
          <li><Link to="/tabDemo">Tab</Link></li>
          <li><Link to="/accordionDemo">Accordion</Link></li>
          <li><Link to="/todolistDemo">Todolist</Link></li>
        </ul>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default App;