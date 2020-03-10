import React from 'react'
import './css/index.css'
// 创建并导出app组件
export default class App extends React.Component {
  constructor(props) {
    super(props);
    // state 
    this.state = {
      comments: [
        { id: 1, name: 'jack', content: '沙发！！！' },
        { id: 2, name: 'rose', content: '板凳~' },
        { id: 3, name: 'tom', content: '楼主好人' }
      ],
      name: '',
      content: ''
    }
  }
  // 输入框
  inputChange(e) {
    console.log(e.target.value);
    this.setState({
      name: e.target.value
    })

  }
  textareaChange = (e) => {
    console.log(e.target.value);
    this.setState({
      content: e.target.value
    })

  }
  addlist = () => {
    let { name, content } = this.state
    let index = this.state.comments.length
    index++
    if (name.trim() && content.trim()) {
      this.setState({
        comments: [...this.state.comments, {id: index, name, content}],
        name: '',
        content: ''
      })
    }
  }

  render() {
    return (
      <div className="app">
        <div>
          <input className="user" type="text" placeholder="请输入评论人" value={this.state.name}
            onChange={this.inputChange.bind(this)} />
          <br />
          <textarea
            className="content"
            cols="30"
            rows="10"
            placeholder="请输入评论内容"
            value={this.state.content}
            onChange={this.textareaChange}
          />
          <br />
          <button onClick={this.addlist}>发表评论</button>
        </div>
        {this.state.comments.length > 0 ?
        <ul>
          {this.state.comments.map((item, index) => {
            return <li key={index}>
              <h3>评论人：{item.name}</h3>
              <p>评论内容：{item.content}</p>
            </li>})
            }
        </ul>
           : <div className="no-comment">暂无评论，快去评论吧~</div>}
      </div>
    )
  }
}