import React, { Component } from 'react';

class TabControl extends Component {
  constructor(props){
    super(props);
    this.state={currentIdx:0};
    this.checkTabIdx=this.checkTabIdx.bind(this);
    this.checkTtemIdx=this.checkItemIdx.bind(this);
  }
  checkTabIdx(index){
    return index===this.state.currentIdx ? 'tab_tittle active' : 'tab_tittle';
  }

  checkItemIdx(index){
    return index===this.state.currentIdx ? 'tab_item show' : 'tab_item';
  }
  render() {
    return (
      <div>
        <div className="tab_wrap">
            {React.Children.map(this.props.children,(element,index) => {
              return (
                <div className={this.checkTabIdx(index)} onClick={() => {this.setState({currentIdx:index})}}>
                    {element.props.name}
                </div>
              )
            })}
        </div>
        <div>
          <div className="item_wrap">
            {React.Children.map(this.props.children,(element,index) => {
              return (
                <div className={this.checkItemIdx(index)}>
                  {element}
                </div>
              )
            })}
          </div>
        </div>

      </div>
    );
  }
};

export default TabControl;