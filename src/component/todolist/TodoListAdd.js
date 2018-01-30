import React, { Component } from 'react';
import Button from '../button/Button';

class TodoListAdd extends Component{

  constructor(props){
		super(props);
		this.state = {value: ''};
        this.handleAddClick=this.handleAddClick.bind(this);
        this.handleChange=this.handleChange.bind(this);
        
	}
	
  	handleChange(event){
  		this.setState({value: event.target.value});
  	}
  	handleAddClick(){
		console.log(this.state.value)
		this.props.getData(this.state.value);
	}
	render(){
		return (
			<li>
				<input type="text" value={this.state.value} onChange={this.handleChange} />
			
				<input type="button" value="add" onClick={this.handleAddClick} />
			</li>
		);
	}
};

export default TodoListAdd;