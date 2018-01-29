import React, { Component } from 'react';

import Button from '../../component/button/Button';

import "./ButtonDemo.css"


class ButtonDemo extends Component {
 render(){
  return (
    <div className="container">
       
        <Button size="big" type="primary" value="btn-primary" className={"gap"}/>
        <Button size="big" type="success" value="btn-primary" className={"gap"}/>
        <Button size="big" type="info" value="btn-info" className={"gap"}/>
        <Button size="big" type="warning" value="btn-warning" className={"gap"}/>
        <Button size="big" type="danger" value="btn-danger" className={"gap"}/>
      
    </div>
  )
 }
}

export default ButtonDemo;
