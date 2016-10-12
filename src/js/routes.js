import Main from './components/Main';
import LoginBtn from './components/LoginBtn';
import NotFound from './components/NotFound';
import TodoAppDashboard from './components/TodoAppDashboard';
import InnerMain from './components/InnerMain';

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
      component: TodoAppDashboard
    },
    childRoutes: [{
      path: '*',
      component: TodoAppDashboard
    }]
  }, {
    path: '*',
    component: NotFound
  }]
};
