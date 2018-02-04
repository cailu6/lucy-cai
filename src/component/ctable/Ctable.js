import React, { Component } from 'react';
import './ctable.css'

class Ctable extends Component{

  constructor(props){
		super(props);
    this.init = this.init.bind(this);
	}

  init(){
    
  }

	render(){


		return (
			<table>
		    	<thead>
		    		<tr>
		    			<th>dfsa</th>
		    			<th>dfs</th>
		    		</tr>
		    	</thead>
		    	<tbody>
		    		<tr>
		    			<td>sdfas</td>
		    			<td>sdfsa</td>
		    		</tr>
		    	</tbody>
		    	<tfoot>
		    		<tr>
	    				<td>sdfsa</td>
		    			<td>fsaa</td>
		    		</tr>
		    	</tfoot>
	        </table>
		);
	}
};

export default Ctable;
