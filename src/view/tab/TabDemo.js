import React, { Component } from 'react';

import Tab from '../../component/tab/Tab';


class ButtonDemo extends Component {
 render(){
  return (
    <div className="container">
       <Tab>
          <div name="first">
            first
          </div>
          <div name="second">
            second
          </div>
          <div name="third">
            third
          </div>
       </Tab>
    </div>
  )
 }
}

export default ButtonDemo;
