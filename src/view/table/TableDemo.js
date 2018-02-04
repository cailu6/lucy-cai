
import React, { Component } from 'react';

import Table from '../../component/table/Table';


class TableDemo extends Component {
	constructor(props){
    super(props);
	    this.state={
	       data:[
		       {
		            title : "title0",
		            content : "content0"
		        },
		        {
		            title : "title1",
		            content : "content1"
		        },
		        {
		            title : "title2",
		            content : "content2"
		        },
		        {
		            title : "title3",
		            content : "content3"
		        }
	     	]
	    }
    }
    render(){
		return ( 
		<Table />
		)
    }
}

export default TableDemo;
