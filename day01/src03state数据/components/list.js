import React from 'react'
export default class List extends React.Component{
  
  // 使用数据 --vue组件中数据写在data中 ,使用this.data.xxx 使用
  //         --react中数据写在state中 .使用this.state.名字 使用
  // ---->复杂写法
  // constructor(){
  //   super()
  //   this.state={
  //     count:1
  //   }
  // }

  //---->简单写法
  state = {
    // 名字:值
    count:1,
    list:[1,2,3]
  }
  //必须写 render
  render(){
      // this.state.list 就是那个数组,可以循环map生成数据
    // 注意 
    //1.return 的后面必须跟 html,不建议换行
    // 2.换行需要用() ,否则会报错
    return (<div>
      我是list -----{this.state.count}
      <ul>
        {this.state.list.map((item,index)=>{
          return <li key>我的第{ item }个li</li>
        })}
      </ul>
    </div>)
  }
}