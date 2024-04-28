import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google 
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    // github 
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }

    // update user 
    const userProfileUpdat = (name, imgUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: imgUrl
        })
    }

    // sing out user
    const logOut = () => {
        setUser(null);
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                setLoading(false)
                console.log(currentUser)
            }
        });
        return () => {
            unsubscribe()
        }
    }, [])

    const authValue = {
        user,
        loading,
        createUser,
        logInUser,
        googleLogin,
        githubLogin,
        userProfileUpdat,
        logOut
    }

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;