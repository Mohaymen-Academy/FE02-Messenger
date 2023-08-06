import App from '../../App';
import Register from '../../Pages/Register';
import Login from '../../Pages/Login';

const routes = [
  {
    path: '/App',
    component: App,
    Private: false
  },
  {
    path: '/Register',
    component: Register,
    Private: false
  },
  {
    path: '/Login',
    component: Login,
    Private: false
  }
];

export default routes;
