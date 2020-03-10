// idenx.js 入口文件 必须要有 我们在这里学习react
// 现在我要使用react ,有三个步骤
// 1.引入react 和react-dom(脚手架在创建 的时候已经下载来了)
import React from 'react'
import ReactDOM from 'react-dom'

import './css/abc.css'
// 创建元素
// 样式处理: 1 行内样式style 2 类名 className
//1 行内样式style style={ 样式名1:值1,样式名2,值1.... }
// 这里style {{}}  第一个{}表示要写js 第二个表示这是一个对象
// style里的样式要用驼峰命名法 backgroundColor :"red"
// let mydiv = <div style={{ color: "red", border: "5px solid green" }}>
//   我是div
// </div>

let mydiv = <div className="box">
  我是div
</div>
//渲染元素

ReactDOM.render(mydiv, document.getElementById('root'))