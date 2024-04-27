import { Navigate } from "react-router-dom";
import UseAuth from "../../Hook/UseAuth";

const PrivateRoutes = ({ children }) => {
    const { user } = UseAuth();

    if (user) {
        children
    }
    return <Navigate to="login"></Navigate>
}

export default PrivateRoutes;