import React from 'react'
import ReactDOM from 'react-dom'



class List extends React.Component {
 
  state={
    count:0
  }
  add=()=>{
    // this.setState({
    //   count :this.state.count+1
    // })
    // 立刻获取count数据
    // console.log(this.state.count); //1? 应该是1,但是setState是异步的所以还是0
    // 非要立即获取 count最新值

    // 1.
    // 设置setState的第二个参数   
    // this.setState({},回调函数)
    // 平时该怎么写怎么写.除非需要立即获取最新的值,再加上回调函数

    // 简单写法
  //   this.setState({count:this.state.count+1},()=>{
  //     console.log('count',this.state.count);
  //   }
  // )
    
  //2. 复杂写法
  this.setState((state,props)=>{
    // state 就是数据
    return{
      // 名字新值
     count :state.count+1
    }
  })
  console.log('count',this.state.count);
  }
  render() {
    return <div>
      <div>---我是List内容---{this.state.count}</div>
      <button onClick={this.add}>点击+1</button>
      <hr />
     

    </div>
  }
}



// 渲染组件
ReactDOM.render(<List />, document.getElementById('root'))