import React, { Component } from 'react';
import './accordion.css'

class AccordionComponent extends Component{
	render(){
		return (
			<div className="accordion_item">
				<div className="title" onClick={this.props.clk}>{this.props.title}</div>
				<div className={"content "+(this.props.active ? "full" : "")}>{this.props.content}</div>
			</div>
		);
	}
};

class Accordion extends Component{
	constructor(props){
		super(props);
		this.state={index:0};
		this.checkClick=this.checkClick.bind(this);
	}

	checkClick(index){
		console.log(index)
		this.setState({
			index : index
		})
	}

	render(){
		return(
			<div className="accordion">
				{this.props.data.map((el,index) => {
					console.log(this.state.index == index)
					return (
						<AccordionComponent active={this.state.index == index} clk={this.checkClick.bind(null,index)} key={index} title={el.title} content={el.content} />
					)
				})}
			</div>
		)
	}
}

export default Accordion;
