
import React, { Component } from 'react';

import TodoBox from '../../component/todolist/TodoBox';


class TodolistDemo extends Component {
	constructor(props){
		super(props);
		this.updateData= this.updateData.bind(this);
        this.state = {
        	arr : [
				{
					id: 1,
					content: 'javaScript'
				},
				{
					id: 2,
					content: 'java'
				},
				{
					id: 3,
					content: 'c++'
				}
			]
        }
	}
	updateData(value){
		if (value) {
			this.setState({arr:value});
		}
	}
	render(){
		return (
			<TodoBox data={this.state} updateData={this.updateData}/>
		)
	}
}

export default TodolistDemo;
