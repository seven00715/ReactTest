import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
//父子通信
// 组件通讯：props这个名字 在react很重要 后面天天要用
// 父 -> 子  -- 组件写上props属性 组件内部使用props接受
//             注意：1 如果是class类组件 就 this.props.名字 
//                  2 如果是函数组件   就 先接受参数props 再 props.名字
//                  3 可以传任何类型的值

// 先直接写在一个位置,正常使用 各自组件
class Parent extends React.Component {
  state = {
    pname: "我是父组件的值"
  }
  render() {
    return <div className="parent">
      父组件:

      <Child pname={this.state.pname} age='18'></Child>
    </div>
  }
}


// class组件 用this.props接受
// class Child extends React.Component {
//   render(){
//     console.log('子组件的值',this.props);  // {pname:'我是父组件的值'}

//     return <div className="child">
//       子组件:{this.props.pname} -- {this.props.age} 


//     </div>
//   }
// }

// 函数组件
function Child(props) {
  console.log('函数组件props', props);
  return <div className="child">

    子组件:{props.pname} -- {props.age}

  </div>
}



// 渲染组件
ReactDOM.render(<Parent />, document.getElementById('root'))