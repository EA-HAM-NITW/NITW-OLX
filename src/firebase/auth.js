import { auth } from "./firebase";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password);
}

export const doSignInUserWithEmailAndPassword = async (email,password) => {
    return signInWithEmailAndPassword(auth,email,password);
}

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log("Google Sign-in successful", user);
        return user;
    } catch (error) {
        console.error("Error during Google sign-in:", error.message);
        throw error;
    }
};

export const doSignOut = () => {
    return auth.signOut();
}