import React from 'react'
import { Route,Link } from 'react-router-dom'
import News from './News'
import Profile from './Profile'
import Shop from './shop'
import './home.css'
export default class Home extends React.Component {
  render() {
    return <div className='home'>
      <h3 className='header'>我是Home组件</h3>
      {/* 挖坑显示news 匹配路由 挖坑显示组件 写在哪里就在哪里显示 */}

      <Route exact path='/home/news' component={News}></Route>
      <Route exact path='/home/profile' component={Profile}></Route>
      <Route exact path='/home/shop' component={Shop}></Route>
      <div className='tabbar'>
        <div className="item">
          {/* js的push或者LInk */}
          <Link to='/home/news'>伙伴</Link> 
        </div>
        <div className="item">
        <Link to='/home/shop'>商城</Link> 
        </div>
        <div className="item">
        <Link to='/home/profile'>我</Link> 
        </div>
      </div>
    </div>

  }
}

