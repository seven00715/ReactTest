// idenx.js 入口文件 必须要有 我们在这里学习react
// 现在我要使用react ,有三个步骤
// 1.引入react 和react-dom(脚手架在创建 的时候已经下载来了)
import React from 'react'
import ReactDOM from 'react-dom'


// 创建元素
// 条件渲染
let isloading = false
// let mydiv = ''

// 判断语句
// if (isloading) {
//    mydiv = <div>loading...</div>
//  } else {
//    mydiv = <div>加载完成</div>
//  }
//函数
function loading() {
  if (isloading) {
   return  <div>loading...</div>
  } else {
   return  <div>加载完成</div>
  }
}

//  ======为什么在脚手架中可以这么写 ---->因为babel帮我们转换了
//渲染元素

// -----------↓↓↓↓↓↓↓↓↓↓这里调用loading()
ReactDOM.render(loading(), document.getElementById('root'))