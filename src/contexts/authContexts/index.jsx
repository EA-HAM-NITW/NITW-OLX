import React,{ useContext, useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doSignInUserWithEmailAndPassword } from "../../firebase/auth";
import { doCreateUserWithEmailAndPassword, doSignInWithGoogle, } from "../../firebase/auth";
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

    async function loginWithGoogle() {
        try {
          const result = await doSignInWithGoogle(); 
          const user = result.user;
          setCurrentUser({ ...user });
          setUserLoggedIn(true);
          return user;
        } catch (error) {
          console.error("Google Login Error:", error);
          throw error;
        }
      }

    const value = {
        currentUser,
        userLoggedIn,
        loading,
        login,
        register,
        logout,
        loginWithGoogle, 
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )

}