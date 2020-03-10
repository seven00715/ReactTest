import React from 'react'
export default class List extends React.Component{

  //必须写 render
  render(){

    // 注意 
    //1.return 的后面必须跟 html,不建议换行
    // 2.换行需要用() ,否则会报错
    return (<div>
      我是list
    </div>)
  }
}