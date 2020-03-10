import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header'


// login 页面被复用了 哪个要用就拿去 
// render-props模式
// 在组件上写上render 函数
// 在函数里面写上当前组件的内容
// header的公共部分+当前组件的内容

class App extends React.Component {
  state = {
    count: 0,
    array: []
  }
  render() {
    return <div>
      我是App
      <hr />
      {/*  在组件上写上render 函数 可以接受参数 */}
      <Header
        render={(x, y) => {
          // return 123
          return <div>login页面 {x}---{y}
          </div>
        }}></Header>

    </div>
  }
}



// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))