import React, { Component } from 'react';
import './button.css'

class Button extends Component{

  constructor(props){
		super(props);
    this.init = this.init.bind(this);
	}

  init(){
    let classStr = "";
    for (var variable in this.props) {
      if (this.props.hasOwnProperty(variable)) {
        classStr += this.props[variable] + " ";
      }
    }
    return classStr
  }

	render(){

    const ComponentProp = false ? 'a' : 'button';

		return (
			<ComponentProp type="button" className={this.init()}>Button</ComponentProp>
		);
	}
};

export default Button;
