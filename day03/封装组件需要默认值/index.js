import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header'
//组件的进阶
// 组件注意的问题
// 需要验证传值 类型 以免别人用 报错都不知道
// 传值:传一个数字,但是你给我一个字符串,应该提示一下
// 比如轮播图传时间应该是数字 传数组应该是数组

// 封装组件需要设置 默认值 (如果传值了,就按传的值来,如果没有传,按默认值来(没有默认值也没有传回报错))



class App extends React.Component{
  state = {
    count: 0,
    array:[]
  }
  render(){
    return <div>
      我是App
      <hr/>
      <Header name={this.state.count} array={this.state.a} pagesize= '20'></Header>
      
    </div>
  }
}



// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))