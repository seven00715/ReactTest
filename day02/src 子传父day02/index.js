import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
//父子通信
// 组件通讯：props这个名字 在react很重要 后面天天要用
// 子传 父  1.父亲写一个函数 子组件区调用 2.组件上写上的 函数 传到 子 里面 3.在子 里面 this.props.函数() 调用 4.调用的时候可以写上参数传值

class Parent extends React.Component {
  state = {
    count: 0
  }
  fatherCount = (num) =>{
    console.log('父组件的函数');
    this.setState({
      count: this.state.count+num
    })
    
  }
  render() {
    return <div className="parent">
      父组件的count值:{this.state.count}

      <Child fatherCount = {this.fatherCount}></Child>
    </div>
  }
}


// class组件 用this.props接受
class Child extends React.Component {
  add =() =>{
    console.log('点击子组件按钮');
    // 要求点击子组件按钮 去让父组件 count +1
    // 接受父组件传过来的事件 this.props.fatherCount
    // 子传父直接在调用的时候传参
    
    this.props.fatherCount(10)
  }
  
  render(){
    console.log('子组件的值',this.props);  // {pname:'我是父组件的值'}

    return <div className="child">
      子组件:
      <button onClick={this.add} >点击子组件按钮让父组件count+10</button>


    </div>
  }
}

// // 函数组件
// function Child(props) {
//   console.log('函数组件props', props);
//   return <div className="child">

//     子组件:{props.pname} -- {props.age}

//   </div>
// }



// 渲染组件
ReactDOM.render(<Parent />, document.getElementById('root'))