
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Ctable from '../../component/ctable/Ctable';


class TableDemo extends Component {
	constructor(props) {
		super(props);
		this.deleteFunc = this.deleteFunc.bind(this);
		this.updateFunc = this.updateFunc.bind(this);
		this.addFunc = this.addFunc.bind(this);
		this.state = {
			data: {
				headData: [
					{
						title: "编号",
						field: "id"
					},
					{
						title: "姓名",
						field: "name"
					},
					{
						title: "年龄",
						field: "age"
					},
					{
						title: "性别",
						field: "gender"
					},
					{
						title: "地址",
						field: "address"
					}
				],
				bodyData: [
					{ "id": "1", "name": "张三", "age": "18", "gender": "男", "address": "深圳市南山区" },
					{ "id": "2", "name": "李四", "age": "17", "gender": "女", "address": "深圳市宝安区" },
					{ "id": "3", "name": "王五", "age": "20", "gender": "男", "address": "深圳市罗湖区" },
				],
				bodyFunc: [
					{ "funcName": 'delete', "handle": this.deleteFunc },
					{ "funcName": 'update', "handle": this.updateFunc },
				],
				toolFunc: [
					{"funcName": "add", "handle": this.addFunc }
				]
			}
		}
	}

	deleteFunc(event) {
		console.log();
		var tdMap = ReactDOM.findDOMNode(event.target).parentNode.parentNode.getElementsByTagName("td");
		console.log(tdMap, typeof(tdMap),tdMap.length);
		var obj = {}
		// tdMap.map((value,index)=>{
		// 	var field = value.getAttribute("field");
		// 	var val = value.innerHTML
		// 	obj[field]=val;
		// })
		console.log(obj);
	}

	updateFunc() {
		console.log("update...");

	}

	addFunc(){
		var tempArray = this.state.data.bodyData;
		tempArray.push({"id":"5","name":"陈六","age":"18","gender":"男","address":"深圳市龙华区"});
		var tempData = this.state.data;
		tempData.bodyData = tempArray;
    this.setState({data: tempData});
	}

	render() {
		return (
			<Ctable data={this.state.data} />
		)
	}
}

export default TableDemo;
