import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component{

   constructor(props){
		super(props);
        this.mapItem=this.mapItem.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
	}
	deleteItem(val){
		//console.log(val,"oooooooo");
		this.props.deleteValue(val)
	}

	mapItem(){
		let array = []
		this.props.data.map((value,index)=>{
						array.push(<TodoItem  itemData={value} deleteItem={this.deleteItem} key={index}/>);
					})
		return array;
	}

  
	render(){
		return (
			<ul>
				{
					this.mapItem()
				}
				
			</ul>
		);
	}
};

export default TodoList;