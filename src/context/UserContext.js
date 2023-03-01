import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';


export const AuthContext = createContext()

const auth = getAuth(app)
const googleprovider = new GoogleAuthProvider();
const UserContext = ({ children }) => {

    const [user, setUser] = useState({})
    const [loading, setLoading]=useState(true)


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };

    const logOut = () => {
        return signOut(auth);
    };

    const signInWithGoogle = ()=>{
        return signInWithPopup(auth,googleprovider);

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currientUser => {
            setUser(currientUser);
            setLoading(false);
            console.log(currientUser);
        })
        return () => {
            unsubscribe()
        }

    }, [])


    const authInfo = { user, loading, createUser, signInUser, logOut,signInWithGoogle }

    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;