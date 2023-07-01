import React, {Fragment} from 'react';
class Todolist extends React.Component {
  state = {
      list: [1,2,3,4,5],
      inputValue: ''
  }
  
  handleInput(e){
      this.setState({
          inputValue: e.target.value,
      })
  }
  addInputValue(){
      const {inputValue, list} = this.state
      console.log(inputValue)
      this.setState({
          list: [...list, inputValue]
      })
  }
  delInputValue(index){
    const {list} = this.state
    list.splice(index, 1)
    this.setState({
        list: [...list]
    })
  }
  render(){
      const {list,inputValue} = this.state

      const obj = {
          test: {
              a: 111,
              b: 222
          }
      }

      const {test} = obj
      test.c = 333
      console.log(obj, 'obj')
      return (
          <Fragment>
          <p>
           <input value={inputValue} onChange = {(e)=>this.handleInput(e)} /><button onClick={this.addInputValue.bind(this)}>添加</button>
          </p>
          <ul>{
            list.map((item, index)=>{
            return <li onClick={(index)=>this.delInputValue(index)} key={index}>{item}</li>
           })
          }
          </ul>
          </Fragment>
      )
  }
}
export default Todolist

