import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoListAdd from './TodoListAdd';

class TodoBox extends Component{

  constructor(props){
		super(props);
        
	}

  
	render(){
		return (
			<div>
				<TodoList />
				<TodoListAdd />
			</div>
		);
	}
};

export default TodoBox;