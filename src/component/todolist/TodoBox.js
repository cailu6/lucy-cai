import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoListAdd from './TodoListAdd';



class TodoBox extends Component{

  	constructor(props){
		super(props);
        this.getData=this.getData.bind(this);
        this.deleteValue= this.deleteValue.bind(this);
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
	deleteValue(val){
		//console.log(val,"9999");
		var tempArr = this.state.arr;
		tempArr.map((value,index)=>{
			if(value.id == val){
				delete tempArr[index];
			}
		})
		console.log(tempArr);
		this.setState({arr:tempArr});
	}
	getData(val){
		var temp = [];
		var tempArr = this.state.arr;
		this.state.arr.map((value,index)=>{
			temp.push(value.id);
		});
		var maxValue = temp.length == 0? 1: Math.max(...temp) +1;
		var obj = {}
		obj.id = maxValue;
		obj.content = val;
		tempArr.push(obj);
		this.setState({arr:tempArr});
	}
	render(){
		return (
			<div>
				<TodoList deleteValue={this.deleteValue} data={this.state.arr}/>
				<TodoListAdd getData={this.getData} />
			</div>
		);
	}
};

export default TodoBox;