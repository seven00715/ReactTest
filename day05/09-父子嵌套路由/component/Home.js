import React  from 'react'
import { Route } from 'react-router-dom'
import  News  from './News'
export default class Home extends React.Component{
  render(){
    // 要使用路由必须在App根组件 必须使用一次BrowerRouter 包裹所有内容
    return<div>
        <h3>我是Home组件</h3>
        {/* 挖坑显示news 匹配路由 挖坑显示组件 写在哪里就在哪里显示 */}
        <Route exact path='/home/news' component={News}/>
        </div>

  }
}

