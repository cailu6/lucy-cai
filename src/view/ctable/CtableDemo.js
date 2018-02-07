
import React, { Component } from 'react';

import Ctable from '../../component/ctable/Ctable';


class TableDemo extends Component {
	constructor(props){
    super(props);
	    this.state={
				data:{
					headData:[
						{
							title: "编号",
							field: "id"
						},
		        {
		            title : "姓名",
		            field : "name"
		        },
		        {
		            title : "年龄",
		            field : "age"
		        },
		        {
		            title : "性别",
		            field : "gender"
		        },
		        {
		            title : "地址",
		            field : "address"
		        }
		     	],
					bodyData:[
						{"id":"1","name":"张三","age":"18","gender":"男","address":"深圳市南山区"},
						{"id":"2","name":"李四","age":"17","gender":"女","address":"深圳市宝安区"},
						{"id":"3","name":"王五","age":"20","gender":"男","address":"深圳市罗湖区"},
					],
					bodyFunc:[
						{"funcName":'delete',"handle":"delete"},
						{"funcName":'update',"handle":"update"},
					]
				}
	    }
    }
    render(){
			return (
				<Ctable data={this.state.data}/>
			)
    }
}

export default TableDemo;
