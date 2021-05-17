import Home from './pages/home';
import UsersList from './pages/usersList';
import App from './app';
import Admins from './components/AdminList';
import NotFoundPage from './components/NotFoundPage';

export default [
    {
        ...App,
        routes: [
            {
                ...Home,
                path: '/',
                exact: true
            },
            {
                ...UsersList,
                path: '/users'
            },
            {
                ...Admins,
                path: '/admins'
            },
            {
                ...NotFoundPage
            }
        ]
    }
]