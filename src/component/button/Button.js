import React, { Component } from 'react';
import './button.css'

class Button extends Component{

  constructor(props){
		super(props);
    this.init = this.init.bind(this);
    this.handlerClick = this.handlerClick.bind(this);
	}

  init(){
    let classStr = "";
    classStr = this.props.type;
    if (this.props.className != "" && this.props.className!=undefined ){
      classStr += " " + this.props.className;
    }
    return classStr
  }

  handlerClick(e: React.MouseEvent<HTMLButtonElement>){
    const onClick = this.props.onClick;
    if(onClick){
      onClick(e);
    }
  }

	render(){

    const ComponentProp = false ? 'a' : 'button';

		return (
			<ComponentProp type="button" onClick={this.handlerClick} className={this.init()}>{this.props.value}</ComponentProp>
		);
	}
};

export default Button;
