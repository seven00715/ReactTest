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
   * 事件函数this 有问题--->我们尽量写箭头函数 就没有问题了
   * 注意:事件函数尽量是箭头函数
   */
  add=(e,a,b,c)=>{
    console.log(e,a,b,c);
   
    this.setState({
      count:this.state.count+1
    })
  }
  render() {
    return <div>
      <h1>count的值是:{this.state.count}</h1>
      {/* this.add()加了小括号是还没点击就调用了 */}
      <button onClick={(e)=>{
        this.add(e,1,2,3)
      }}>点我+1</button>
    </div>
  }
}

// 渲染组件
ReactDOM.render(<List />, document.getElementById('root'))