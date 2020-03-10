import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import Home from './component/Home'
import Login from './component/login'
export default class App extends React.Component {
  render() {
    // 要使用路由必须在App根组件 必须使用一次BrowerRouter 包裹所有内容
    return <Router>
      <div>
        {/* <h3>我是App组件</h3> */}
        {/* 默认 / 打开跳转到 /home/news */}
        <Route 
        exact
        path='/' 
        render={(props)=>{
          return <Redirect to="/home/news"></Redirect>
        }}
        ></Route>
        {/* 配置路由 */}
        <Route path="/home" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
      </div>
    </Router>

  }
}