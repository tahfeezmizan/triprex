import { createContext } from "react";

export const AuthContext = createContext(null);

const authValue = {

}

const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;