// idenx.js 入口文件 必须要有 我们在这里学习react
// 现在我要使用react ,有三个步骤
// 1.引入react 和react-dom(脚手架在创建 的时候已经下载来了)
import React from 'react'
import ReactDOM from 'react-dom'


// 创建元素

let mydiv =  React.createElement('div',{className:'box'},'我是div')
// 这种写法太过繁琐
//----->在脚手架中,我们可以使用jsx语法
//渲染元素

ReactDOM.render(mydiv,document.getElementById('root'))