import React from 'react'

// 路由的使用
// react 经常在 App.js跟组件 配置基本路由
// 1.下载包 cnpm i react-router-dom -S
// 2,导入三个包
// 3. 要使用路由必须在App根组件 必须使用一次BrowerRouter 包裹所有内容
// 4.Route 写在哪 ,对应的组件就显示在哪
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import { HashRouter,Route,Link } from 'react-router-dom'
// BrowserRouter 是history 模式 http://localhost:3000/home 
//HashRouter是 hash 模式  有 # http://localhost:3000/home#/login
// BrowserRouter as Router 取了一个别名   Route 没有r 的代表是 显示组件的位置
// ====>在React中一般使用BrowserRouter  history模式
import Home from './Home'
import Detail from './Detail'
export default class App extends React.Component {
  render() {
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
        {/* <Route path='/home' component={Home}></Route> */}
        <hr />
        {/* Route  写到哪里对应的组件就显示到哪里*/}
        {/* <Route path='/路径' component={对应组件名}></Route> */}
        {/* '/home/abc'显示home组件 */}
        {/* React中
          模糊匹配: 包含就行
          /home 显示
          '/home/abc'显示
          '/home/abc/xxx' 显示
          开头  路由会从做到右看是否存在 匹配 如果匹配就显示了
          
          精确匹配 加上 exact 只能匹配一摸一样的 (推荐写这个★)
          */}
        <Route exact path='/home' component={Home}></Route>
        {/* <Route exact path='/home/abc' component={Home}></Route>
        <Route exact path='/home/abc/xxx' component={Home}></Route> */}
        {/* 从列表跳转到 详情页 传路由参数 id  
        /detail/2 ----->'/detail/:id' -----> id就是2
        /detail/2/zs ----->'/detail/:id/name' -----> id就是2  name 就是 zs
        */}
        <Route exact path='/detail/:id/:name' component={Detail}></Route>

      </div>

    </Router>
  }
}