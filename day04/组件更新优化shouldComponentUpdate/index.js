import React from 'react'
import ReactDOM from 'react-dom'


//setState() 的两个作用 
//- 修改state
//- 更新组件


// 过程：父组件重新渲染时，也会重新渲染子组件，但只会渲染当前组件子树（当前组件以其所有子组件）


// -----father1------
class Father1 extends React.Component {

  state = {
    count: 0
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
//避免不必要的更新 在这个函数就可以 控制 页面要不要更新 那么久可以写代码优化了
  // shouldComponentUpdate 组件需要更新吗？return true更新 return false不更新
// 示例:要求 count 偶数更新 奇数不更新
  shouldComponentUpdate(nextProps, nextState) {
    // 注意 在 这个函数 this.state.count 拿到是上一次的 老值
    // console.log('count值',this.state.count)
    console.log(nextState);
    // nextState 拿到的是新值
    if (nextState.count % 2 === 0) {
      return true
    }else{
      return false
    }
  }
  render() {
    // console.log('左侧Father组件');
    return <div>
      <div onClick={this.handleClick}>---我是Father1组件内容---{this.state.count}</div>

    </div>
  }
}



// 渲染组件
ReactDOM.render(<Father1 />, document.getElementById('root'))