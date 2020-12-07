import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const MHeader = () => {
  return (
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">搜索</Menu.Item>
        <Menu.Item key="2">个人中心</Menu.Item>
        <Menu.Item key="3">图标</Menu.Item>
      </Menu>
    </Header>
  )
}

export default MHeader;
