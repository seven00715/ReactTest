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
   * 传参改变一下写法就行
   */
  add=(e,a,b,c)=>{
    console.log(e,a,b,c);
    // let { count } = this.state
    // count++
    // this.setState({
    //   count
    // })
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