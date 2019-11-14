/*
 * Created with Visual Studio Code.
 * github: https://github.com/React-xui/x-tabs
 * User: 田想兵
 * Date: 2019-04-03
 * Time: 20:00:00
 * Contact: 55342775@qq.com
 */
import React, { Component } from 'react';
import TabPane from './TabPane';

export default class Tabs extends Component {
  static TabPane = TabPane;
  constructor(props) {
    super(props);
    let active = props.defaultActive;
    if (typeof active === 'undefined') {
      let {children} = this.props;
      active = React.Children.count(children) == 1?children.key:children[0].key;
    }
    this.state = { active: active };
  }
  componentWillReceiveProps(newprops){
    if( typeof newprops.active !=='undefined' && newprops.active != this.state.active){
      this.setState({active:newprops.active});
    }
  }
  onSelect = (key)=>{
    if(key !=this.state.active){
      this.setState({active:key},()=>{
        this.props.onChange&&this.props.onChange(key);
      });
    }
  }
  formatTabs() {
    // console.log(React.Children)
    let headers = [];
    let contents = [];
    let {active} = this.state;
    React.Children.forEach(this.props.children, (item, k) => {
      let { children, tab } = item.props;
      let cls = 'x-tabs-header-item',clsCon = 'x-tabs-item';
      let {key} = item;
      if(active == key){
        cls +=" active";
        clsCon += " active";
      }
      headers.push(<div className={cls} key={key} onClick={this.onSelect.bind(this,key)}>{tab}</div>);
      contents.push(<div className={clsCon} key={key}>{React.cloneElement(item)}</div>);
    })
    return <div><div className="x-tabs-header">{headers}</div>{contents}</div>;
  }
  render() {
    let {className} = this.props;
    let cls = typeof className ==='undefined'? "x-tabs":className +' x-tabs';
    return (
      <div className={cls}>
        {this.formatTabs()}
      </div>
    );
  }
}
