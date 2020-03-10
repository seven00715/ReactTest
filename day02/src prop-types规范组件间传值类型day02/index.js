import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header'
//组件的进阶
// 组件注意的问题
// 需要验证传值 类型 以免别人用 报错都不知道
// 传值:传一个数字,但是你给我一个字符串,应该提示一下
// 比如轮播图传时间应该是数字 传数组应该是数组


class App extends React.Component{
  state = {
    count: 0,
    array:[]
  }
  render(){
    return <div>
      我是App
      <hr/>
      <Header name={this.state.count} array={this.state.array}></Header>
      
    </div>
  }
}



// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))