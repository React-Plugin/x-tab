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
import TabTitle from './TabTitle';

export default class Tabs extends Component {
  static TabPane = TabPane;
  constructor(props) {
    super(props);
    let active = typeof props.active === 'undefined' ? props.defaultActive : props.active;;
    if (typeof active === 'undefined') {
      let { children } = this.props;
      active = React.Children.count(children) == 1 ? children.key : children[0].key;
    }
    this.state = { active: active, tabs: [] };
  }
  componentWillReceiveProps(newprops) {
    if (typeof newprops.active !== 'undefined' && newprops.active != this.state.active) {
      this.setState({ active: newprops.active });
    }
  }
  onSelect = (key) => {
    if (key != this.state.active) {
      this.setState({ active: key }, () => {
        this.props.onChange && this.props.onChange.call(this, key);
      });
    }
  }
  formatTabs() {
    // console.log(React.Children)
    let headers = [];
    let contents = [];
    let { active } = this.state;
    React.Children.forEach(this.props.children, (item, k) => {
      if (item) {
        if (item.type === TabPane) {
          let { children, tab, className } = item.props;
          let cls = 'x-tabs-header-item';
          let clsCon = 'x-tabs-item';
          if (className) {
            clsCon += ' ' + className;
          }
          let { key } = item;
          if (active == key) {
            cls += " active";
            clsCon += " active";
          }
          headers.push(<div className={cls} key={key} onClick={this.onSelect.bind(this, key)}>{tab}</div>);
          if (item.props.forceRender === true || active == key) {
            contents.push(<div className={clsCon} key={key}>{React.createElement(item.type, item.props)}</div>);
          }
        } else {
          contents.push(item);
        }
      }
    })
    return <div><div className="x-tabs-header">{headers}</div>{contents}</div>;
  }
  // componentDidMount() {
  //   console.log('tab didmount.')
  // }
  // componentWillMount() {
  //   console.log('will mount')
  // }
  //子tab加载事件
  onLoad(props) {
    // console.log('onload')
    this.setState(state => {
      state.tabs[props.index] = props;
      return { tabs: state.tabs };
    });
  }
  //子tab移除事件
  unLoad(props) {
    this.setState(state => {
      state.tabs.splice(props.index, 1);
      return { tabs: state.tabs };
    });
  }
  renderTabsHeader() {
    let { tabs, active } = this.state;
    let {headerItemStyle={},headerActiveStyle={}} = this.props;
    return tabs.map((item, index) => {
      let cls = 'x-tabs-header-item';
      let style = headerItemStyle;
      if (active == item.value) {
        cls += " active";
        style = headerActiveStyle;
      }
      // return <div className={cls} key={item.value} onClick={this.onSelect.bind(this, item.value)}>{item.tab}</div>
      return <TabTitle style={style} className={cls} value={item.value} key={item.value} onClick={this.onSelect.bind(this, item.value)}>{item.tab}</TabTitle>
    });
  }
  render() {
    let { className, children, style = {}, headerStyle = {} } = this.props;
    let cls = typeof className === 'undefined' ? "x-tabs" : className + ' x-tabs';
    let { active } = this.state;
    return (
      <div className={cls} style={style}>
        {/* {this.formatTabs()} */}
        <div><div className="x-tabs-header" style={headerStyle}>{this.renderTabsHeader()}</div>
          {React.Children.map(children, (item, index) => {
            return React.createElement(item.type, { ...item.props, active: active, value: item.key, onLoad: this.onLoad.bind(this), unLoad: this.unLoad.bind(this), index, onSelect: this.onSelect });
          })}</div>
      </div>
    );
  }
}
