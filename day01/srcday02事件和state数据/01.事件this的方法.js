import React from 'react'
import ReactDOM from 'react-dom'
// react中的事件处理

// 要求--点击按钮 然count+1 ----react中处理事件

// react中的事件类似原生
//原生 onclick onmousemove
// react --> onClick onMouseMove

class List extends React.Component {
  state = {
    count: 1
  }
  /**
   * 处理事件中this指向的问题
   * 1.用箭头函数 this直接指向list实例
   * 2.用bind(this) 改变this指向,但是不调用
   */
  add() {
    console.log('点击了');
    let { count } = this.state
    count++
    this.setState({
      count
    })
  }
  render() {
    return <div>
      <h1>count的值是:{this.state.count}</h1>
      {/* this.add()加了小括号是还没点击就调用了 */}
      <button onClick={this.add.bind(this)}>点我+1</button>
    </div>
  }
}

// 渲染组件
ReactDOM.render(<List />, document.getElementById('root'))