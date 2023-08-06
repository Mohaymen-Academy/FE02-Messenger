import App from '../../App.jsx'
import Register from '../../Pages/Register.jsx'

const routes = [
  {
    path: '/App',
    component: App,
    Private: false,
  },
  {
    path: '/Register',
    component: Register,
    Private: false,
  },
]

export default routes
