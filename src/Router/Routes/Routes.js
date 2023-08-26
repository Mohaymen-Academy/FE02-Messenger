import App from '../../App';
import Register from '../../Pages/Register';
import Login from '../../Pages/Login';
import Verifymail from '../../Pages/Verifymail';
// import VerifyEmail from '../../Pages/verifyEmail';


const routes = [
  {
    path: '',
    component: App,
    Private: true
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
  },
  {
    path: '/Verify',
    component: Verifymail,
    Private: false
  }
];

export default routes;
