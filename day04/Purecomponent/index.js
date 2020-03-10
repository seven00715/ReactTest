import React from 'react'
import ReactDOM from 'react-dom'


// React.Component 一定更新
//可以配合 shouldComponentUpdate 判断新值和老值 是否一致,一致不更新,不一致才更新

//React.PureComponent 也是创建组件
// PureComponent 内部自动实现了 shouldComponentUpdate钩子，不需要手动比较
// PureComponent 帮我们简单判断了 要深层次控制,还是自己写的好
// - 数字 字符串等 简单类型 相等 不会更新
// - 对象 等复杂类型 地址相等也不会更新
// 总结:
// 1.PureComponent帮我们 简单 使用了 shouldComponentUpdate
// 感觉还好 但是不好用 知道即可
// 2. 我们还是使用React.Component  如果需要优化  自己写shouldComponentUpdate
class Father1 extends React.PureComponent {

  state = {
    count: 0
  }
  // handleClick = () => {
  //   this.setState({
  //     count: Math.floor(Math.random()*4) //随机生成 0~3 的数字
  //   },()=>{
  //     console.log('此时的count',this.state.count);
      
  //   })
  // }
  handleClick = () => {
    const newObj = {...this.state} // 解构赋值了,改变了地址就可以了
    newObj.count = newObj.count +1 
    this.setState({
      count: newObj.count //随机生成 0~3 的数字
    },()=>{
      console.log('此时的count',this.state.count);
      
    })
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // 注意 在 这个函数 this.state.count 拿到是上一次的 老值
  //   // console.log('count值',this.state.count)
  //   console.log(nextState);
  //   // nextState 拿到的是新值
  //   if (nextState.count % 2 === 0) {
  //     return true
  //   }else{
  //     return false
  //   }
  // }
  render() {
    // console.log('左侧Father组件');
    return <div>
      <div onClick={this.handleClick}>---我是Father1组件内容---{this.state.count}</div>

    </div>
  }
}



// 渲染组件
ReactDOM.render(<Father1 />, document.getElementById('root'))