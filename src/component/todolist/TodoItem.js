import React, { Component } from 'react';
import Button from '../button/Button';

class TodoItem extends Component{

  constructor(props){
		super(props);
        
	}

  
	render(){
		return (
			<li>
				<span>ssss</span>
				<Button size="big" type="info" value="delete"/>
			</li>
		);
	}
};

export default TodoItem;