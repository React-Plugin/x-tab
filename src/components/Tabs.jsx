/*
 * Created with Visual Studio Code.
 * github: https://github.com/React-xui/x-seed
 * User: 田想兵
 * Date: 2017-05-14
 * Time: 20:00:00
 * Contact: 55342775@qq.com
 */
import React, { Component } from 'react';
import TabPane from './TabPane';

export default class Tabs extends Component {
  static TabPane = TabPane;
  constructor(props) {
    super(props);
    let active = ''
    if (typeof props.active === 'undefined') {
      active = React.Children.toArray(this.props.children)[0].key;
    }
    this.state = { active: active };
  }
  formatTabs() {
    console.log(React.Children)
    return React.Children.map(this.props.children, (item, k) => {
      let { children } = item.props;
      return React.cloneElement(item)
    })
  }
  render() {
    return (
      <div className="Tabs">
        {this.formatTabs()}
      </div>
    );
  }
}
