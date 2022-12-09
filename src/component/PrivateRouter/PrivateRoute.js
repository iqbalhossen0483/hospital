import { Navigate, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';
import "./PrivateRoute.css"

const PrivateRoute = ({ element }) => {
    const { user, isLoad } = useAuth();
    const location = useLocation();
    if (isLoad) {
        return (
            <div className="h-screen flex justify-center items-center">
                <div className="spinner"></div>
            </div>)
    }
    if (!user.email) {
        return <Navigate to="/log-in" state={{ from: location }} />
    }
    return element;
};

export default PrivateRoute;