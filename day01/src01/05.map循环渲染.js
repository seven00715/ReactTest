// idenx.js 入口文件 必须要有 我们在这里学习react
// 现在我要使用react ,有三个步骤
// 1.引入react 和react-dom(脚手架在创建 的时候已经下载来了)
// idenx.js 入口文件 必须要有 我们在这里学习react
// 现在我要使用react ,有三个步骤
// 1.引入react 和react-dom(脚手架在创建 的时候已经下载来了)
import React from 'react'
import ReactDOM from 'react-dom'


// 创建元素

let arr = [{
  id: 1,
  name: '三国演义'
}, {
  id: 2,
  name: '水浒传'
}, {
  id: 3,
  name: '西游记'
}, {
  id: 4,
  name: '红楼梦'
}]

// 要求:循环数组,生成li
// 循环数组使用map 2.循环谁就给谁加key

// let myul = <ul>
//   {arr.map(function(item,index,arr){
//     return <li key={ item.id } >{ item.name }</li>
//   })}
// </ul>
// let myul1 = (<ul>
//   {
//     arr.map(function (item,index,array) {
//     return <li key={index}>{ item.name }</li>
//     })
//   }
// </ul>)


//----改造其他形式
// let myul = <ul>
//   {arr.map(item => {
//     return <li key={item.id} >{item.name}</li>
//   })}
// </ul>

//改造2 (去掉花括号和return,只有一行的情况)
let myul = <ul>
  {arr.map(item => <li key={item.id}> {item.name}  </li>
  )}
</ul>



//渲染元素

ReactDOM.render(myul, document.getElementById('root'))