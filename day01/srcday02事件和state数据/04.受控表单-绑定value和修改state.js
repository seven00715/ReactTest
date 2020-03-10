import React from 'react'
import ReactDOM from 'react-dom'


class List extends React.Component {
  state = {
    username: '',
    password:''
  }

  getUsername = (e) => {
    console.log('onChange变化了',e.target.value);
    this.setState({
      username : e.target.value //把文本框的值,拿来赋值
    })
  }

  getpassword = (e)=>{
    this.setState({
      password : e.target.value
    })
  }

  render() {
    return <div>
      <h1>文本框的值:{this.state.username}</h1>
    {/* react表单操作 1需要给文本框绑定value值 2.绑定onChange事件 值改变触发
     这就是 v-model的 一个实现 vue也是 1绑定 value值 2绑定oninput */}
      用户名:
      <input type="text" value={this.state.username} onChange={this.getUsername} />
      密码:
      <input type="password"  value={this.state.password} onChange={this.getpassword}/>
    </div>
  }
}

// 渲染组件
ReactDOM.render(<List />, document.getElementById('root')) 