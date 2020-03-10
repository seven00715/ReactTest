
import React from 'react'
import PropTypes  from 'prop-types'
// 验证类型:
// 1.下载导入 npm i prop-types  import prop
class Header extends React.Component{
  
  
  render(){
    console.log(this.props);
    return <div>
      <h2>
        我是Header组件--{this.props.name}
        </h2>
     {/* Header组件标签之间的内容: <div>{this.props.children}</div> */}
    </div>
  }
}

// 组件.PropTypes = {
//   属性:PropTypes的验证规则
// }
// 这里是小写的p
Header.propTypes ={
  // 这里是大写P
  // 传来的  count 属性是一个number类型
  count:PropTypes.number,
  array:PropTypes.array
}
// 在导出之前写好验证
export default  Header