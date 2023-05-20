import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const loginUsingGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const loginUsingGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, gitProvider);
    }
    const logout = () => {
        return signOut(auth);
    }


    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        loginUsingGoogle,
        loginUsingGithub,
        logout



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