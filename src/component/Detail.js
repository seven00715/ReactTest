import React from 'react'

// 获取跳转过来的id发送ajax
export default class App extends React.Component{
  // 页面组件第一次渲染好
  componentDidMount(){
    // 这里可以获取页面打开的参数
    // 可以发送页面打开的 ajax
    // 可以获取DOM
   // 获取路由携带的参数 ↓↓
    console.log(this.props.match.params.id);
    console.log(this.props.match.params.name);
    
  }
  render(){
    // 要使用路由必须在App根组件 必须使用一次BrowerRouter 包裹所有内容
    return<div>
        <h3>我是Detail组件</h3>
        </div>

  }
}