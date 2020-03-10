import React from 'react'

// 路由的使用
// react 经常在 App.js跟组件 配置基本路由
// 1.下载包 cnpm i react-router-dom -S
// 2,导入三个包
// 3. 要使用路由必须在App根组件 必须使用一次BrowerRouter 包裹所有内容
// 4.Route 写在哪 ,对应的组件就显示在哪
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
// import { HashRouter,Route,Link } from 'react-router-dom'
// BrowserRouter 是history 模式 http://localhost:3000/home 
//HashRouter是 hash 模式  有 # http://localhost:3000/home#/login
// BrowserRouter as Router 取了一个别名   Route 没有r 的代表是 显示组件的位置
// ====>在React中一般使用BrowserRouter  history模式
import Home from './component/Home'
// import Detail from './component/Detail'
// import Login from './component/login'
// import News from './component/News'
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
        {/* <Route exact path='/home' component={Home}></Route> */}
        <hr />
        {/* 父子嵌套
            要求/home 组件下面 有/news组件
            /home/news
            先到home里面 再到home里面去挖坑 显示 才是home里面嵌套
            [★★]父子嵌套路由 不能写exact
            /home/news
          
            1. app组件写上父路由
            2.在父路由里面挖坑显示组件
            3.父路由 不能写exact
        */}
        {/* 这个home嵌套news 不能写 exact */}
        <Route path='/home' component={Home}></Route>
        
      </div>

    </Router>
  }
}