import React,{ useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doSignInUserWithEmailAndPassword } from "../../firebase/auth";
import { doCreateUserWithEmailAndPassword } from "../../firebase/auth";
import { doSignOut } from "../../firebase/auth";

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}){
    const [currentUser,setCurrentUser] = useState(null);
    const [userLoggedIn,setUserLoggedIn] = useState(false);
    const [loading,setLoading] =useState(true);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,initializeUser);
        return unsubscribe;
    },[])

    async function initializeUser(user) {
        if(user){
            setCurrentUser({ ...user });
            setUserLoggedIn(true);
        }else{
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }

    async function login(email, password) {
        return await doSignInUserWithEmailAndPassword(email, password);
    }

    async function register(email, password) {
        return await doCreateUserWithEmailAndPassword(email, password);
    }

    async function logout() {
        await doSignOut();
    }

    const value = {
        currentUser,
        userLoggedIn,
        loading,
        login,
        register,
        logout,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )

}