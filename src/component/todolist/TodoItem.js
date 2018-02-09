import React, { Component } from 'react';
import Button from '../button/Button';

class TodoItem extends Component{

  constructor(props){
		super(props);
        this.handleDeleteClick=this.handleDeleteClick.bind(this);
	}
	handleDeleteClick(event){
		this.props.deleteItem(this.props.itemData.id);
	}

	render(){
		return (
			<li>
				<span>{this.props.itemData.id}</span>.<span>{this.props.itemData.content}</span>
				<Button type="big danger" value="delete" onClick={this.handleDeleteClick} />
			</li>
		);
	}
};

export default TodoItem;
