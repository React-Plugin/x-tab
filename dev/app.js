import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from '../src/index';
import '../src/_index';
const {TabPane} = Tabs;
var appElement = document.getElementById('example');
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: "1" };
  }
  onChange=(v)=>{
    console.log(v)
  }
  toTab(index){
    this.setState({index})
  }
  render() {
    return (
      <div>
      <Tabs defaultActive="1" onChange={this.onChange}>
        <TabPane tab="选项卡一" key="1">这是选项卡一的内容</TabPane>
        <TabPane tab="选项卡二" key="2">这是选项卡2的内容</TabPane>
      </Tabs>
        <Tabs active={this.state.index} onChange={this.onChange}>
          <TabPane tab="选项卡一" key="1">这是选项卡一的内容</TabPane>
          <TabPane tab="选项卡二" key="2">这是选项卡2的内容</TabPane>
        </Tabs>
        <button onClick={this.toTab.bind(this,"1")}>切换一</button>
        <button onClick={this.toTab.bind(this,"2")}>切换二</button>
      </div>
    )
  }
}
ReactDOM.render(<App />, appElement);