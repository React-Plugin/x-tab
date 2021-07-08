/*
 * @Author: 田想兵
 * @Date: 2021-07-08 09:50:45
 * @LastEditTime: 2021-07-08 14:18:56
 * @github: https://github.com/tianxiangbing
 * @Contact: 55342775@qq.com
 * @Desc: 选项卡头
 */
import React, { Component } from 'react';
export default class TabTitle extends Component {
  constructor(props) {
    super(props);
    this.dom = React.createRef();
  }
  componentDidMount() {
    // console.log(this.dom)
    this.dom.current.addEventListener('click', this.props.onClick, false);
  }
  componentWillUnmount() {
    this.dom.current.removeEventListener('click', this.props.onClick, false);
  }
  render() {
    let { className, value, onClick, children, style = {} } = this.props;
    return <div className={className} style={style} ref={this.dom} key={value} >{children}</div>
  }
}
