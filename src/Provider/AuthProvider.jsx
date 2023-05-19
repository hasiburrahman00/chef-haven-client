import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from '../Firebase/firebase.config';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const loginUsingGoogle = () => {
        return signInWithPopup(auth, provider);
    }

    const loginUsingGithub = () => {
        return signInWithPopup(auth, gitProvider);
    }


    const authInfo = {
        createUser,
        loginUser,
        loginUsingGoogle,
        loginUsingGithub



    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;