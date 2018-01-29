import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TabControl from './component/tab/Tab';
import Accordion from './component/accordion/Accordion';
import Button from './component/button/Button';

var arr=[
  {
            title : "title",
            content : "content"
        },
        {
            title : "title1",
            content : "content1"
        },
        {
            title : "title2",
            content : "content2"
        },
        {
            title : "title3",
            content : "content3"
        }
];
class App extends Component {
 render(){
  return (
    <div className="container">
       <TabControl>
          <div name="first">
            <Accordion data={arr} />
          </div>
          <div name="second">
            <Button size="big" type="primary" value="btn-primary"/>
            <Button size="big" type="info" value="btn-info"/>
          </div>
          <div name="third">
            third new
          </div>
       </TabControl>
    </div>
  )

 }
}

export default App;
