import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header'
//组件的进阶
class App extends React.Component{
  render(){
    return <div>
      我是App
      <hr/>
      {/* children 是组件标签之间 的内容 */}
      {/* <Header>我是组件标签里的文字^_^</Header>
      <Header>
         <button>我是组件标签按钮</button>
      </Header> */}
      <Header>
         {()=>{
           console.log('我是组件标签之间的函数');
           
         }}
      </Header>
      
    </div>
  }
}



// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))