import React from 'react'
import ReactDOM from 'react-dom'

// react中的ref需要 3步
// 1.创建ref userRef = React.createRef()
// 2.给元素加上ref 
// 3.获取元素 this.userRef.current
class Login extends React.Component {
  userRef = React.createRef()
  login = () => {
    // 获取用户名 通过ref来做
    console.log(this.userRef); 
    console.log(this.userRef.current);
    console.log('文本框值',this.userRef.current.value);
    
    
    
  }

  render() {
    return <div>
      {/* 不用state */}
      用户名:
      <input type="text" ref={this.userRef} /> <br />
      <button onClick={this.login}>登录</button>
    </div>
  }
}

// 渲染组件
ReactDOM.render(<Login />, document.getElementById('root')) 