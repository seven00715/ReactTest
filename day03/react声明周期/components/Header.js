
import React from 'react'

// 创建时
    // constructor -> render -> componentDidMount
// 更新时 
  // render componentUpdata
// 卸载时
  // componentWillUnMount 


  // 新增的
  // 1.getDerivedStateFromProps()
  // 2.shouldComponentUpdate( 注意  组件需要更新吗? return true 更新 return false 不更新 和优化有关)
  // 3.getSnapshotBeforeUpdate()
class Header extends React.Component{
  constructor(){
    super()
    console.log('constructor');
    
    this.state ={}
  }
  // 首次页面完全渲染 执行一次
  componentDidMount(){
    console.log('组件已经渲染到页面了---componentDidMount');
    // 1.react 发送请求
    // 2.需要操作dom时 
    
  }
  // 组件已经更新 执行多次
  componentDidUpdate(){
    console.log('组件已经更新到页面了 --- componentDidUpdate');
    
  }
  // 组件将要卸载 执行一次
  componentWillUnmount(){
    console.log('组件将要卸载----componentWillUnmount');
    
  }


  //---------------新版-------------
  // 在render之前 执行
  // 在还没有render之前,可以再次修改一下数据  类似<拦截数据> 修改一下

   static getDerivedStateFromProps(nextProps,prevState){
    console.log('getDerivedStateFromProps');
    
   }
   //组件应该更新吗? return true(默认) 就表示更新 false不更新 
   // 可以在里面手动控制页面是否更新 ? 对优化有好处(判断更新了没,没有更新就不用渲染页面)
   shouldComponentUpdate(){
    console.log('shouldComponentUpdate');
    return true
    
   }

   // 数据已经更新 但是页面还没有更新 在渲染之前 执行  这里面可以获取上一次的dom元素
   getSnapshotBeforeUpdate(){
      console.log('getSnapshotBeforeUpdate');
      
   }
   

  //组件渲染成 内存里 的dom 多次
  render(){
    // console.log(this.props);
    console.log(' 组件渲染---- render');
    
    return <div>
      <h2>
        我是Header组件
        <button onClick={()=>{
          this.setState({

          })
        }}>+1</button>
        </h2>
  
    </div>
  }
}


export default  Header