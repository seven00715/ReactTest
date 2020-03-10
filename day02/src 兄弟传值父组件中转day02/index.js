import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
// 兄弟传值
// 1.把值写到父亲身上 2.兄弟和父亲就是父子传值关系
// 建议以后兄弟都要用的数据写在 父亲上
class Counter extends React.Component {
  state = {
    count :0
  }
  onIncrement=()=>{
    this.setState({
      count:this.state.count + 1
    })
  }
  render() {
      return (<div>
          <Child1 count={this.state.count} />
          <Child2  add={this.onIncrement}/>
      </div>
      )
  }
}
class Child1 extends React.Component {
  render() {
      return (
        // 接受父亲传过来的值
      <h1>计数器：{this.props.count}</h1>
      )
  }
}
class Child2 extends React.Component {
  sonAdd=()=>{
    // 接受父组件传过来的事件调用
    this.props.add()
  }
  render() {
      return (
          <button onClick={this.sonAdd}>+1</button>
      )
  }
}

// // 函数组件
// function Child(props) {
//   console.log('函数组件props', props);
//   return <div className="child">

//     子组件:{props.pname} -- {props.age}

//   </div>
// }



// 渲染组件
ReactDOM.render(<Counter />, document.getElementById('root'))