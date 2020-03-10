import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

class App extends React.Component {

  state = {
    rgb: "#369"
  }
  getRgb = () =>{
    return  Math.floor(Math.random()*256)
  }
  changeRgb = () => {
    this.setState({
      rgb: `rgb(${this.getRgb()}, ${this.getRgb()}, ${this.getRgb()})`
    })
  }
  render() {
    console.log('App组件');
    
    return <div className="app" style={{ backgroundColor: this.state.rgb }}>
      <div>---我是App组件内容---</div>
      <button onClick={this.changeRgb}>切换背景颜色</button>
      <div className="app-wrapper">
        <Father1></Father1>
        <Father2></Father2>
      </div>


    </div>
  }
}

// -----father1------
class Father1 extends React.Component {

  state = {
    count: 0
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    console.log('左侧Father组件');
    return <div className="parent">
      <div onClick={this.handleClick}>---我是Father1组件内容---{this.state.count}</div>
      <div className="parent-wrapper">
        <Child1></Child1>
        <Child2></Child2>
      </div>
    </div>
  }
}
class Child1 extends React.Component {
  render() {
    console.log('左侧child1组件');
    return <div className="child">---我是Child1组件内容---</div>
  
  }
}
class Child2 extends React.Component {
  render() {
    console.log('左侧child2组件');
    return <div className="child">
      <div >---我是Child2组件内容---</div>
    </div>
  }
}

// ------father2-----
class Father2 extends React.Component {

  state = {
    count: 0
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    console.log('右侧Father组件');
    return <div className="parent">
      <div onClick={this.handleClick}>---我是Father2组件内容---{this.state.count}</div>
      <div className="parent-wrapper">
        <Child3></Child3>
        <Child4></Child4>
      </div>

    </div>
  }
}
class Child3 extends React.Component {
  render() {
    console.log('右侧child3组件');
    return <div className="child">
      <div>---我是Child3组件内容---</div>
    </div>
  }
}
class Child4 extends React.Component {
  render() {
    console.log('右侧child4组件');
    return <div className="child">
      <div>---我是Child4组件内容---</div>
    </div>
  }
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))