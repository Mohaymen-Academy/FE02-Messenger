import App from '../../App.jsx';
import Register from '../../Pages/Register.jsx';
import Login from '../../Pages/Login.jsx';

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
