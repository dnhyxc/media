import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import './index.less';

const { SubMenu } = Menu;
const { Sider } = Layout;

const MMenu = (props) => {

  const pathname = props.location.pathname.substring(1)
  console.log(pathname);
  const [selectKey, setSelectKey] = useState('app');

  useEffect(() => {
    setSelectKey(pathname);
  }, [pathname]);

  return (
    <div className='menuWrapper'>
      <div className='title'>环球媒资</div>
      <Sider width={235} className="site-layout-background">
        <Menu
          mode="inline"
          selectedKeys={[selectKey]}
          defaultOpenKeys={['sub1', 'sub2', 'sub3']}
          className='menu'
          style={{ color: 'yellowgreen' }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="媒资列表">
            <Menu.Item key="app">
              <Link to='/app'>媒资首页</Link>
            </Menu.Item>
            <Menu.Item key="person">
              <Link to='/person'>个人媒资</Link>
            </Menu.Item>
            <Menu.Item key="archive">
              <Link to='/archive'>归档媒资</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="媒资管理">
            <Menu.Item key="apply">
              <Link to='/apply'>媒资申请</Link>
            </Menu.Item>
            <Menu.Item key="approval">
              <Link to='/approval'>媒资审批</Link>
            </Menu.Item>
            <Menu.Item key="storage">
              <Link to='/storage'>媒资入库</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="个人中心">
            <Menu.Item key="account">
              <Link to='/account'>账号管理</Link>
            </Menu.Item>
            <Menu.Item key="member">
              <Link to='/member'>会员管理</Link>
            </Menu.Item>
            <Menu.Item key="power">
              <Link to='/power'>权限管理</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </div>
  )
}

export default withRouter(MMenu);
