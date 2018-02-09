import React, { Component } from 'react';

import Button from '../../component/button/Button';

import "./ButtonDemo.css"


class ButtonDemo extends Component {
 render(){
  return (
    <div className="container">

        <Button type="big primary" value="btn-primary" className={"gap"}/>
        <Button type="big success" value="btn-primary" className={"gap"}/>
        <Button type="big info" value="btn-info" className={"gap"}/>
        <Button type="big warning" value="btn-warning" className={"gap"}/>
        <Button type="big danger" value="btn-danger" className={"gap"}/>

    </div>
  )
 }
}

export default ButtonDemo;
