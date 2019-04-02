import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from '../src/index';
import '../src/_index';
const {TabPane} = Tabs;
var appElement = document.getElementById('example');
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  testFunc() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div>
        <Tabs>
          <TabPane tab="选项卡一" key="1">这是选项卡一的内容</TabPane>
          <TabPane tab="选项卡二" key="2">这是选项卡一的内容</TabPane>
        </Tabs>
      </div>
    )
  }
}
ReactDOM.render(<App />, appElement);