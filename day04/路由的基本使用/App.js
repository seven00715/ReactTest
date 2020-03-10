import React from 'react'

// 路由的使用
//1. 下载并导入
// 2. import 导入三个组件

import { BrowserRouter as Router,Route,Link } from 'react-router-dom'
// BrowserRouter as Router 取了一个别名   Route 没有r 的代表是 显示组件的位置
import Home from'./Home'
import Login from './login'
export default class App extends React.Component{
  render(){
    // 要使用路由必须在App根组件 必须使用一次BrowerRouter 包裹所有内容
    return <Router>

      <div>
        <h3>我是App组件</h3>
       
        
        <ul>
          <li>
            <Link to='/home'>去home</Link>
          </li>
          <li>
          <Link to='/login'>去login</Link>
          </li>
        </ul>
        <hr/>

        {/* <Router path="home" component={显示的组件}></Router> */}
        {/* Router的作用是:
        匹配路由  就显示对应的组件
        Router写在哪里,就在哪里挖坑 显示在哪里 类似 router-view
          随便写在哪里 只要看见 就会去匹配 对应的 挖坑显示

        */}
        <Route path="/home" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
      </div>
    
    </Router>
  }
}