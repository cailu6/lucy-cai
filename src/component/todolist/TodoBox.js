import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoListAdd from './TodoListAdd';



class TodoBox extends Component{

  	constructor(props){
		super(props);
        this.getData=this.getData.bind(this);
        this.deleteValue= this.deleteValue.bind(this);
	}
	deleteValue(val){
		var tempArr = this.props.data.arr;
		tempArr.map((value,index)=>{
			if(value.id == val){
				delete tempArr[index];
			}
		})
		var finalArr = [];
		tempArr.map((value,index)=>{
			if(value != undefined){
				finalArr.push(value);
			}
		})
		this.props.updateData(finalArr);
	}
	getData(val){
		var temp = [];
		var tempArr = this.props.data.arr;
		this.props.data.arr.map((value,index)=>{
			temp.push(value.id);
		});
		var maxValue = temp.length == 0? 1: Math.max(...temp) +1;
		var obj = {}
		obj.id = maxValue;
		obj.content = val;
		tempArr.push(obj);
		this.props.updateData(tempArr);
	}
	render(){
		return (
			<div>
				<TodoList deleteValue={this.deleteValue} data={this.props.data.arr}/>
				<TodoListAdd getData={this.getData} />
			</div>
		);
	}
};

export default TodoBox;