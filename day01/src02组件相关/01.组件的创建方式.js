// idenx.js 入口文件 必须要有 我们在这里学习react
// 现在我要使用react ,有三个步骤
// 1.引入react 和react-dom(脚手架在创建 的时候已经下载来了)
import React from 'react'
import ReactDOM from 'react-dom'


// 创建元素


// 组件(创建方式有两种--函数组件---class类组件)
// 1.函数组件 首字母大写 构造函数形式
// 创建 Header 头组件
// function Header(){
//   // 函数组件(名称必须大写构造函数的形式)  必须return (没有内容渲染return null)
//   return (
//     <div>我是header头组件(函数组件)</div>
//   )
// }

// 2.class 创建组件
// class 组件名 extends React.Component{
  
// }
class Header extends React.Component{
  // 必须写上render函数
  render(){ 
    // render 里面必须return html 如果没有东西 如果没有东西 return nll
  return <div>
    我是header组件
  </div>}
}
// let mydiv = <div>我是div</div>

//渲染元素
// 1.使用组件 Header 双标签 也可以写 单标签 <Header />
ReactDOM.render(<Header></Header>,document.getElementById('root'))