import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component{

  constructor(props){
		super(props);
        
	}

  
	render(){
		return (
			<ul>
				<TodoItem />
				<TodoItem />
				<TodoItem />
			</ul>
		);
	}
};

export default TodoList;