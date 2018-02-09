import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './ctable.css'
import Button from '../button/Button'

class Ctable extends Component{

  constructor(props){
		super(props);
    this.headInit = this.headInit.bind(this);
    this.bodyInit = this.bodyInit.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.state = {
      headData: this.props.data.headData,
      bodyData: this.props.data.bodyData,
      bodyFunc: this.props.data.bodyFunc,
      toolFunc: this.props.data.toolFunc,
    }
	}

  headInit(){
    console.log(this.state);
    var headArray = [];
    this.state.headData.map((value,index)=>{
      headArray.push(<th key={index} field={value.field}>{value.title}</th>)
    })
    if(this.state.bodyFunc.length > 0){
      headArray.push(<th key={"func"}>操作</th>);
    }
    return headArray;
  }

  bodyInit(value){
    console.log(value);
    var bodyArray = [];
    for (var variable in value) {
      if (value.hasOwnProperty(variable)) {
        bodyArray.push(<td key={variable} field={variable}>{value[variable]}</td>)
      }
    }
    //加载后面的按钮功能
    if (this.state.bodyFunc.length > 0) {
      var butArray = [];
      this.state.bodyFunc.map((value,index)=>{
        butArray.push(<Button type="big danger" key={index} value={value.funcName} onClick={value.handle} />);
      })
      bodyArray.push(<td key={"handle"}>{butArray}</td>)
    }
    return bodyArray;
  }

  handleAddClick() {
    this.state.toolFunc.map((value,index)=>{
      value.handle();
    })
  }

	render(){
		return (
      <div>
        {/*查询条件*/}
        {/*功能按钮*/}
        <div>
          <Button type="big primary" value="add" onClick={this.handleAddClick} />
        </div>
        {/*表格*/}
        <table>
          {/*表格头部*/}
          <thead>
            <tr>
              { this.headInit()}
            </tr>
          </thead>
          {/*表格内容*/}
          <tbody>
            {
              this.state.bodyData.map((value,index)=>{
                return(
                  <tr key={index}>
                      {this.bodyInit(value)}
                  </tr>
                )
              })
            }
          </tbody>
          <tfoot>
          </tfoot>
        </table>
      </div>
		);
	}
};

export default Ctable;
