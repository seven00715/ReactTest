import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header'




class App extends React.Component{
  state = {
    count: 0,
    array:[]
  }
  render(){
    return <div>
      我是App
      <hr/>
      <Header></Header>
      
    </div>
  }
}



// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))