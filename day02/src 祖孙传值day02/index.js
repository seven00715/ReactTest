import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
//祖孙传值

const { Provider,Consumer } = React.createContext()
class Counter extends React.Component {
  
 render() {
      return (
      <Provider value="祖父组件传递的值">
        <div>
        祖父组件(一代)
          <Child1  />
      </div>
      </Provider>
      
      )
  }
}
class Child1 extends React.Component {
  render() {
      return (
        <div>
          父组件(二代)
          <Child2></Child2>
        </div>
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
        <Consumer>{
          data => {
          return<div>
          孙子组件(三代)---
          {data}
        </div> }
        }
          
        </Consumer>
          
      )
  }
}


// 渲染组件
ReactDOM.render(<Counter />, document.getElementById('root'))