import * as React from 'react';
import { Layout, Menu, Breadcrumb, Icon ,message} from 'antd';
import { Route, Redirect } from "react-router-dom";
import UserList from './user/UserList';
import "../styles/css/layout.scss";

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class Admin extends React.Component{
    constructor(props) {
        super(props);
    }

  handleClickUserList = (e) =>{
    console.log(e.item.props)
    this.props.history.push('/admin/user/list');
  }


  handleClickIndex = (e) =>{
    console.log(e.item.props)
    this.props.history.push('/admin/index');
  }

    render(){
        return (
            <Layout style={{ minHeight: '100vh' }}>
              <Sider>
                <div className="logo" >后台管理系统</div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                  <Menu.Item key="1" onClick={this.handleClickIndex}>
                    <Icon type="pie-chart" />
                    <span>首页</span>
                  </Menu.Item>
                  
                  <SubMenu
                    key="/user"
                    title={
                      <span>
                        <Icon type="desktop" />
                        <span>用户管理</span>
                      </span>
                    }
                  >
                    <Menu.Item key="userList" onClick={this.handleClickUserList}>用户列表</Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout>
               
                <Content style={{ margin: '0 16px' }}>
                  <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>后台管理</Breadcrumb.Item>
                    <Breadcrumb.Item>工作台</Breadcrumb.Item>
                  </Breadcrumb>
                  <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <Route path="/admin/user/list/" component={UserList} />
                        <Redirect to="/admin/user/list/"/>
                        
                  </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>kangshaojun.com</Footer>
              </Layout>
            </Layout>
          )
    }
}
