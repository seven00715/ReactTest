
import React from 'react'


class Header extends React.Component{
  constructor(){
    super()
   
    
    this.state ={
      x:0,
      y:0
    }
  }
  componentDidMount(){
    window.addEventListener('mousemove', this.handleMouseMove)
  }
  componentWillUnmount(){
    window.removeEventListener('mousemove', this.handleMouseMove)
  }
  
  handleMouseMove= (e)=>{
    console.log(e);
    
    this.setState({
      x : e.clientX,
      y : e.clientY
    })
  }
  //
  // header的公共部分被复用了,传过的什么部分就显示什么页面
  // 任何组件都可以用到Header的部分
  // 内容:Header 的公共部分+ 传过来的内容

  //header有公共部分,还获取了页面坐标
  // 以后要用到坐标 就到Header里面
  render(){
    return <div>
      <h2>我是Header的公共部分</h2>
      {/* {this.props.render(1,2)}    */}
      {this.props.render(this.state.x,this.state.y)}  
      {/* render-props模式 */}
  
    </div>
  }
}


export default  Header