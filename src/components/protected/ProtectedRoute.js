import {Navigate, Outlet} from 'react-router-dom';
import {Auth} from '../../Pages/index.js';


const ProtectedRoute = () => {
    Auth.isAuthenticatedFromCookies();
    Auth.isAuthenticatedFromSessionStorage();
    if (Auth.isAuthenticated()) {
        return <Outlet />;
    } else {
        return <Navigate to="/login" />;
    }
}
export default ProtectedRoute;
