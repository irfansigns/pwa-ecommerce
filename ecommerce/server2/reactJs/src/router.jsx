import {createBrowserRouter} from 'react-router-dom';
import Login from './views/login.jsx';
import Register from './views/register.jsx';


const router = createBrowserRouter ([
    // array of objects. here objects are routes. element name shouldn't be started with small letter
    {
        path:'/login',
        element: <Login />,       
    },
    {
        path:'/register',
        element: <Register />,       
    },
]);

export default router;