import App from '../../App';
import Register from '../../Pages/Register';
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
    }
];

export default routes;