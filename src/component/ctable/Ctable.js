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
    this.bodyFuncHandle = this.bodyFuncHandle.bind(this);
    this.state = {
      headData: this.props.data.headData,//头数据
      bodyData: this.props.data.bodyData,//行数据
      bodyFunc: this.props.data.bodyFunc,//行内按钮
      toolFunc: this.props.data.toolFunc,//表上按钮
    }
	}

  //初始化表格头
  headInit(){
    var headArray = [];
    this.state.headData.map((value,index)=>{
      headArray.push(<th key={index} field={value.field}>{value.title}</th>)
    })
    if(this.state.bodyFunc.length > 0){
      headArray.push(<th key={"func"}>操作</th>);
    }
    return headArray;
  }

  //初始化表格体
  bodyInit(value){
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
        butArray.push(<Button type="big danger" key={index} index={index} value={value.funcName} onClick={this.bodyFuncHandle} />);
      })
      bodyArray.push(<td key={"handle"}>{butArray}</td>)
    }
    return bodyArray;
  }


  bodyFuncHandle(event) {
    var tdMap = ReactDOM.findDOMNode(event.target).parentNode.parentNode.getElementsByTagName("td");
		var obj = {}
		for (var i = 0; i < tdMap.length; i++) {
			var field = tdMap[i].getAttribute("field");
			if (field != undefined) {
				var val = tdMap[i].innerHTML;
				obj[field] = val;
			}
		}

    var func ;
    var funcIndex = ReactDOM.findDOMNode(event.target).getAttribute("index");
    this.state.bodyFunc.map((value,index)=>{
      if (index == funcIndex) {
        func = value.handle;
      }
    })

    if (func) {
      func(obj,event);
    }
		//console.log(obj);
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
