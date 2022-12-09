import { useContext } from "react";
import { AuthContex } from "../../AuthProvider/AuthProvider";

const useAuth = () => {
    return useContext(AuthContex);
};

export default useAuth;