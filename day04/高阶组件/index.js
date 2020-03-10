import React from 'react'
import ReactDOM from 'react-dom'

// import Header from './components/Header'


  // 高阶组件: 是一个函数 只不过他的参数或者返回值是组件
  // 高阶组件的作用: 实现代码的复用,增强组件

  function abc(WrapComponent){ /* 就是传过来的App组件 */
    class My extends React.Component{

      render() {
        return <div>
          我是My组件的公共部分
          <hr/>
          {/* 传来的组件 */}
          <WrapComponent></WrapComponent>
        </div>
      }
    }
    return My
  }
  // 如果调用 abc() 函数 就得到My组件

  
 

class App extends React.Component {
 
  render() {
    return <div>
      我是App组件的内容
      <hr />
     

    </div>
  }
}

class Footer extends React.Component {
 
  render() {
    return <div>
      我是footer组件的内容
      <hr /> 
     

    </div>
  }
}
// 传入 Footer 相当于增加了footer 的功能
// let My = abc(App)
let My = abc(Footer)

// 以后知道  函数调用传入 组件是可以的
// 喜欢叫with 开头 --->WithFooter   WithHeader
// 什么组件想要多一层My的功能 就调用写的abc函数就行

// 渲染组件
ReactDOM.render(<My />, document.getElementById('root'))