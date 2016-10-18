import Main from './components/Main';
import LoginBtn from './components/LoginBtn';
import NotFound from './components/NotFound';
import TodoAppDashboard from './components/TodoAppDashboard';
import InnerMain from './components/InnerMain';
import OrgList from './components/OrgList';
import OrgAdd from './components/OrgAdd';
import OrgDetail from './components/OrgDetail';

export default {
  path: '/',
  component: Main,
  indexRoute: {
    component: LoginBtn
  },
  childRoutes: [{
    path: 'main',
    component: InnerMain,
    indexRoute: {
      component: OrgList
    },
    childRoutes: [{
      path: 'orgList',
      component: OrgList
    }, {
      path: 'orgAdd',
      component: OrgAdd
    }, {
      path: 'organizations/:orgName',
      component: OrgDetail
    }, {
      path: '*',
      component: TodoAppDashboard
    }]
  }, {
    path: '*',
    component: NotFound
  }]
};
