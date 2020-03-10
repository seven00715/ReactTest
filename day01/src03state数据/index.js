// idenx.js 入口文件 必须要有 我们在这里学习react
// 现在我要使用react ,有三个步骤
// 1.引入react 和react-dom(脚手架在创建 的时候已经下载来了)
import React from 'react'
import ReactDOM from 'react-dom'


// 创建元素--开始使用组件开发

//每个组件都要导 React 
//ReactDOM 只是index.js入口文件用一次

// 导入导出组件使用
import List from './components/list'

//渲染元素

ReactDOM.render(<List></List>,document.getElementById('root'))