// idenx.js 入口文件 必须要有 我们在这里学习react
// 现在我要使用react ,有三个步骤
// 1.引入react 和react-dom(脚手架在创建 的时候已经下载来了)
import React from 'react'
import ReactDOM from 'react-dom'


// 创建元素

// let mydiv =  React.createElement('div',{className:'box'},'我是div')
// 这种写法太过繁琐
//----->在脚手架中,我们可以使用jsx语法
// 使用jsx语法
// 1. 在js里写html代码
// 2. html范围内使用变量(写js代码)使用单{}花括号
    // ★2.1{} 花括号里可以写什么
    // 1.写+-* 等等 运算符
    // 2.写三元表达式
    // 3. 在{}中不能出现语句--> 不能写if/for/while循环
    // 4.注释  {/* 这里面是注释 */} ctrl+/ 快捷键(和之前一样)
    // 
let age = 18;
let mydiv = <div className="box">
  我是div(jsx语法)
    <ul>
    <li>我的ul里面的li {age}</li>
    {/* 这里html范围内用js  使用单{}花括号 */}
  </ul>
<h1>{ age+1 }</h1>
<h1>{ age>= 18? "已成年" : "未成年"}</h1>
</div>

//  ======为什么在脚手架中可以这么写 ---->因为babel帮我们转换了
//渲染元素

ReactDOM.render(mydiv, document.getElementById('root'))