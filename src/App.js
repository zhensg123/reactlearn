import React from 'react';
import './App.css';
import {
  Routes,
  Route,
  useNavigate 
} from "react-router-dom";
import { Menu } from 'antd';
import 'antd/dist/reset.css';
import { SettingOutlined } from '@ant-design/icons';
import Todolist from './Todolist'
import withRouter from './withRouter'
import widthUseNavigate from './widthUseNavigate'

import './App.scss';

const { SubMenu } = Menu;
// const navigate = useNavigate();

class App extends React.Component {
  constructor(){
    super()
    this.listRef = React.createRef();
  }
  
  state = {
    name: '剑客',
    test: 1234,
    date: +new Date()
  }
  input = null

  inputref = el=>this.input = el
  handleClick = e => {
    console.log('click ',this.props,  e);
    this.props.to(`/${e.key}`)
  };
  focus = ()=>{
    for ( let i = 0; i < 100; i++ ) {
      this.setState( { test: this.state.test + 1 } );
      console.log(this.state.test, 99998989)
    }
 
  }

  componentDidMount(){
   

  }
  // shouldComponentUpdate(props, nextState){
  //   console.log(props, '22222', nextState)
  //   return true
  // }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps, prevState, this, 'prevStateprevState')

    // 否则，对于state不进行任何操作
    return {value: 11};
}
  render() {
    const {name, date} = this.state
    return (
      <div>
        <div className="header">
          <div className="handle-btn">
            <i className="el-icon-s-unfold"></i>
          </div>
          <div className="user-name">
            <i className="iconfont icon-yonghu"></i
            ><span>{name}{date}</span>
            <i className="iconfont icon-tuichu"></i>
          </div >
        </div >
        <div className='left'>
          <div className="title">
            {/* <p>
              <input ref={this.listRef}></input>
            </p> */}
            <p className="title-name" onClick={this.focus}>海贼王</p>
          </div>
          <Menu
            onClick={this.handleClick}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <SubMenu key='mywork' icon={<SettingOutlined />} title="我的工作">
              <Menu.Item key="people">拉人入伙</Menu.Item>
              <Menu.Item key="target">制定目标</Menu.Item>
              <Menu.Item key="do">执行下去</Menu.Item>
              <Menu.Item key="monitor">保障执行</Menu.Item>
              <Menu.Item key="todolist">todolist</Menu.Item>
            </SubMenu>
          </Menu>
        </div>

        <div className='right'>
          <Routes>
            <Route exact path="people" element={<People />}>
            </Route>
            <Route path="do" element={<Do />}>
            </Route>
            <Route path="target" element={<Target />}>
            </Route>
            <Route path="monitor" element={<Monitor />}>
            </Route>
            <Route path="todolist" element={<Todolist />}>
            </Route>
          </Routes>
        </div>
      </div>
    );
  }
}
function People() {
  console.log(this, '2222')
 
  return [
    <div key='1' >1</div>,
    <div key='2' >2</div>,
    <div key='3' >3</div>
];
}

function Do() {
  return (
    <div>
      <h2>执行下去</h2>
    </div>
  );
}

function Target() {
  return (
    <>
      <h2>制定目标</h2>
      <h2>制定目标</h2>
      </>
  );
}
function Monitor() {
  return (
    <div>
      <h2>保障执行</h2>
    </div>
  );
}
export default widthUseNavigate(App)
