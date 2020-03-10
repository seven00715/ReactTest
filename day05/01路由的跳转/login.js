import React from 'react'

export default class App extends React.Component {
  goHome = () => {
    console.log('login的props',this.props);
    this.props.history.push('/home'); //很常用用户跳转经常用
    // this.props.history.go(1) ; // go(1)前进  后退一步 go(-2) 后退两步
    // this.props.history.goForward() // 前进 相当于 1
    // this.props.history.goBack() // 后退 -1
    
  }
  render() {
    return <div>
      <h3>我是登录组件</h3>
      <button onClick={this.goHome}>点击使用js跳转到Home</button>
    </div>

  }
}