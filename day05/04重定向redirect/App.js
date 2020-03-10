import React from 'react'

// 路由的使用
// react 经常在 App.js跟组件 配置基本路由
// 1.下载包 cnpm i react-router-dom -S
// 2,导入三个包
// 3. 要使用路由必须在App根组件 必须使用一次BrowerRouter 包裹所有内容
// 4.Route 写在哪 ,对应的组件就显示在哪
import { BrowserRouter as Router, Route, Link,Switch,Redirect } from 'react-router-dom'
// import { HashRouter,Route,Link } from 'react-router-dom'
// BrowserRouter 是history 模式 http://localhost:3000/home 
//HashRouter是 hash 模式  有 # http://localhost:3000/home#/login
// BrowserRouter as Router 取了一个别名   Route 没有r 的代表是 显示组件的位置
// ====>在React中一般使用BrowserRouter  history模式
import Home from './Home'
import Detail from './Detail'
import Login from './login'
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
        {/* 
         重定向 Redirect
         / 如果是 / 默认就重定向 home
        */}
        {/* 直接跳转 */}
        {/* <Redirect to="home"></Redirect> */}
        {/* 路由有两种写法 */}
        {/* 第一种正常写法 */}
        <Route path='/home' component={Home}></Route>
        {/* 第二种 */}
        {/* 注意这里必要有 exact  因为所有地址都是 / 开头,不加所有的都会重定向 */}
        <Route exact path='/'
         render={props =>{
          //  Redirect 组件是重定向组件 to 属性,指定要重定向到的路由地址
          return <Redirect to="/home"></Redirect>
         }}
        ></Route>
      </div>

    </Router>
  }
}