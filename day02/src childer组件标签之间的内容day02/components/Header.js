
import React from 'react'

export default class Header extends React.Component{
  render(){
    console.log('header的props',this.props);
    this.props.children()
    
    return <div>
      <h2>我是Header组件</h2>
     {/* Header组件标签之间的内容: <div>{this.props.children}</div> */}
    </div>
  }
}