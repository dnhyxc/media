import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import { Config } from '../routeConfig';
import MMenu from '../../components/Menu';
import './index.less';

const { Content } = Layout;

const App = (props) => {
  return (
    <div className='wrapper'>
      <Router>
        <Layout>
          <MMenu />
          <Layout>
            {/* <Layout style={{ padding: '0 20px 0 20px' }}> */}
            <Content className='content'>
              <Switch>
                {Config.map(i => {
                  return (
                    <Route key={i.key} path={i.path} component={i.component} />
                  )
                })}
                <Redirect to='/app' />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    </div>
  )
}

export default App;
